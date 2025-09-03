
import React, { useState, useEffect, useMemo } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
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
    // Removed orderBy from the query to prevent potential Firestore index errors
    // which can stop data from loading. Sorting is now handled client-side.
    const q = query(collection(db, FAQ_COLLECTION));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const faqsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FAQ));
      
      // Sort client-side to avoid needing a composite index in Firestore
      faqsData.sort((a, b) => {
        if (a.category.toLowerCase() < b.category.toLowerCase()) return -1;
        if (a.category.toLowerCase() > b.category.toLowerCase()) return 1;
        if (a.question.toLowerCase() < b.question.toLowerCase()) return -1;
        if (a.question.toLowerCase() > b.question.toLowerCase()) return 1;
        return 0;
      });
      
      setFaqs(faqsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching FAQs in real-time:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
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
          className="w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
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
