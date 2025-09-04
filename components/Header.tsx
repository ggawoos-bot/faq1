

import React from 'react';
// FIX: Changed import to @firebase/auth to resolve module resolution errors.
import { signOut, User } from '@firebase/auth';
import { auth } from '../services/firebase';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
  // FIX: Use User type from modular API.
  user: User | null;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView, user }) => {
  const handleLogout = async () => {
    try {
      // FIX: Use signOut() from modular API.
      await signOut(auth);
      setView(View.USER);
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Failed to sign out.");
    }
  };

  const navLinkClasses = (view: View) => 
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      currentView === view 
        ? 'bg-primary-600 text-white' 
        : 'text-white hover:bg-primary-700'
    }`;

  return (
    <header className="bg-primary-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-white">FAQ System</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <button onClick={() => setView(View.USER)} className={navLinkClasses(View.USER)}>
            User View
          </button>
          <button onClick={() => setView(View.ADMIN)} className={navLinkClasses(View.ADMIN)}>
            Admin Panel
          </button>
          {user && currentView === View.ADMIN && (
            <div className="flex items-center space-x-3 pl-4 border-l border-primary-600">
              <span className="text-white text-sm hidden sm:block">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;