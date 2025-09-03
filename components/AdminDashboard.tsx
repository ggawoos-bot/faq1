
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { collection, getDocs, doc, setDoc, addDoc, updateDoc, deleteDoc, writeBatch, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { FAQ, FAQCreate } from '../types';
import { FAQ_COLLECTION } from '../constants';

import Modal from './Modal';
import FaqForm from './FaqForm';
import Spinner from './Spinner';
import { useDebounce } from '../hooks/useDebounce';

const AdminDashboard: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, FAQ_COLLECTION));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const faqsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FAQ));
      setFaqs(faqsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching FAQs: ", error);
      alert("Could not fetch FAQs.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredFaqs = useMemo(() => {
    if (!debouncedSearchTerm) return faqs;
    const lowercasedFilter = debouncedSearchTerm.toLowerCase();
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(lowercasedFilter) ||
      faq.answer.toLowerCase().includes(lowercasedFilter) ||
      faq.category.toLowerCase().includes(lowercasedFilter)
    );
  }, [faqs, debouncedSearchTerm]);

  const openAddModal = () => {
    setEditingFaq(null);
    setIsModalOpen(true);
  };

  const openEditModal = (faq: FAQ) => {
    setEditingFaq(faq);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingFaq(null);
  };

  const handleFormSubmit = async (faqData: FAQCreate | FAQ) => {
    try {
      if ('id' in faqData) {
        const faqDoc = doc(db, FAQ_COLLECTION, faqData.id);
        await updateDoc(faqDoc, { ...faqData });
      } else {
        await addDoc(collection(db, FAQ_COLLECTION), faqData);
      }
      closeModal();
    } catch (error) {
      console.error("Error saving FAQ: ", error);
      alert("Failed to save FAQ.");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this FAQ?")) {
      try {
        await deleteDoc(doc(db, FAQ_COLLECTION, id));
      } catch (error) {
        console.error("Error deleting FAQ: ", error);
        alert("Failed to delete FAQ.");
      }
    }
  };

  const handleDownloadCsv = () => {
    const headers = ['id', 'category', 'question', 'answer'];
    const csvRows = [
      headers.join(','),
      ...faqs.map(faq =>
        [
          `"${faq.id}"`,
          `"${faq.category.replace(/"/g, '""')}"`,
          `"${faq.question.replace(/"/g, '""')}"`,
          `"${faq.answer.replace(/"/g, '""')}"`
        ].join(',')
      )
    ];
    const csvString = csvRows.join('\n');
    // Add BOM for UTF-8 Excel compatibility for non-English characters.
    const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'faqs.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUploadCsv = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n').filter(row => row.trim() !== '');
      const headers = rows[0].split(',').map(h => h.trim().replace(/"/g, ''));
      const idIndex = headers.indexOf('id');
      const categoryIndex = headers.indexOf('category');
      const questionIndex = headers.indexOf('question');
      const answerIndex = headers.indexOf('answer');
      
      if (categoryIndex === -1 || questionIndex === -1 || answerIndex === -1) {
          alert('CSV must contain "category", "question", and "answer" headers.');
          return;
      }

      const faqsToUpsert = rows.slice(1).map(row => {
          const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
          return {
              id: idIndex > -1 ? values[idIndex] : undefined,
              category: values[categoryIndex],
              question: values[questionIndex],
              answer: values[answerIndex]
          };
      });

      if (window.confirm(`Are you sure you want to upsert ${faqsToUpsert.length} FAQs? This may overwrite existing data.`)) {
        try {
          const batch = writeBatch(db);
          for (const faq of faqsToUpsert) {
            const { id, ...data } = faq;
            if (id) {
              const docRef = doc(db, FAQ_COLLECTION, id);
              batch.set(docRef, data, { merge: true });
            } else {
              const docRef = doc(collection(db, FAQ_COLLECTION));
              batch.set(docRef, data);
            }
          }
          await batch.commit();
          alert('CSV data uploaded successfully!');
        } catch (error) {
          console.error("Error uploading CSV: ", error);
          alert("Failed to upload CSV data.");
        }
      }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
  };
  
  if (loading) {
    return <div className="flex justify-center items-center h-64"><Spinner /></div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Manage FAQs</h2>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <button onClick={openAddModal} className="bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors">Add New FAQ</button>
          <button onClick={handleDownloadCsv} className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors">Download CSV</button>
          <label className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors cursor-pointer">
            Upload CSV
            <input type="file" accept=".csv" onChange={handleUploadCsv} className="hidden" />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Category</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Question</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredFaqs.map(faq => (
              <tr key={faq.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{faq.category}</td>
                <td className="py-3 px-4">{faq.question}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => openEditModal(faq)} className="text-blue-500 hover:text-blue-700">Edit</button>
                    <button onClick={() => handleDelete(faq.id)} className="text-red-500 hover:text-red-700">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredFaqs.length === 0 && <p className="text-center py-4 text-gray-500">No FAQs found.</p>}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={editingFaq ? 'Edit FAQ' : 'Add New FAQ'}>
        <FaqForm onSubmit={handleFormSubmit} existingFaq={editingFaq} />
      </Modal>
    </div>
  );
};

export default AdminDashboard;
