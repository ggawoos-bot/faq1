

import React, { useState, useEffect } from 'react';
import { FAQ, FAQCreate } from '../types';

interface FaqFormProps {
  onSubmit: (faq: FAQCreate | FAQ) => void;
  existingFaq?: FAQ | null;
}

const FaqForm: React.FC<FaqFormProps> = ({ onSubmit, existingFaq }) => {
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (existingFaq) {
      setCategory(existingFaq.category);
      setQuestion(existingFaq.question);
      setAnswer(existingFaq.answer);
    } else {
      setCategory('');
      setQuestion('');
      setAnswer('');
    }
  }, [existingFaq]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const faqData = { category, question, answer };
    if (existingFaq) {
      onSubmit({ ...faqData, id: existingFaq.id });
    } else {
      onSubmit(faqData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
          required
        />
      </div>
      <div>
        <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
          required
        />
      </div>
      <div>
        <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
        <textarea
          id="answer"
          rows={5}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors"
        >
          {existingFaq ? 'Update FAQ' : 'Add FAQ'}
        </button>
      </div>
    </form>
  );
};

export default FaqForm;