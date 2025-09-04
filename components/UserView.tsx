import React, { useState, useEffect, useMemo } from 'react';
// FIX: Changed import to @firebase/firestore to be consistent and avoid module resolution errors.
import { collection, query, getDocs } from '@firebase/firestore';
import { db } from '../services/firebase';
import { FAQ } from '../types';
import { FAQ_COLLECTION } from '../constants';
import { useDebounce } from '../hooks/useDebounce';

import FaqItem from './FaqItem';
import Spinner from './Spinner';

const UserView: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    // Switched from onSnapshot to getDocs for a one-time fetch.
    // This is often more reliable for public read-only data and can avoid
    // potential permission issues with real-time listeners for unauthenticated users.
    const fetchFaqs = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, FAQ_COLLECTION));
        const querySnapshot = await getDocs(q);
        const faqsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FAQ));
        
        // Sort FAQs client-side for consistent display
        faqsData.sort((a, b) => a.category.localeCompare(b.category) || a.question.localeCompare(b.question));
        
        setFaqs(faqsData);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        alert("Could not load FAQs. The content may be unavailable at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const categories = useMemo(() => {
    // Create a unique, sorted list of categories from the sorted FAQs
    const uniqueCategories = [...new Set(faqs.map(faq => faq.category))];
    return ['All', ...uniqueCategories];
  }, [faqs]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch = debouncedSearchTerm 
        ? faq.question.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [faqs, selectedCategory, debouncedSearchTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">Find answers to the most common questions.</p>
      </div>

      <div className="mb-8 sticky top-4 bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg shadow-sm z-10">
        <input
          type="text"
          placeholder="Search for a question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white text-gray-900"
        />
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow'
                : 'bg-white text-gray-700 hover:bg-gray-200 border'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => <FaqItem key={faq.id} faq={faq} />)
          ) : (
            <div className="text-center py-10 text-gray-500">
              <p className="text-xl">No FAQs found</p>
              <p>Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserView;