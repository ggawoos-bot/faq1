

import React, { useState, useEffect } from 'react';
// FIX: Changed import to @firebase/auth to resolve module resolution errors.
import { onAuthStateChanged, User } from '@firebase/auth';
import { auth } from './services/firebase';

import Header from './components/Header';
import UserView from './components/UserView';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Spinner from './components/Spinner';
import { View } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.USER);
  // FIX: Use User type from modular API.
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // FIX: Use onAuthStateChanged from modular API.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const renderContent = () => {
    if (authLoading) {
      return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
    }

    if (view === View.ADMIN) {
      return currentUser ? <AdminDashboard /> : <Login />;
    }
    
    return <UserView />;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header currentView={view} setView={setView} user={currentUser} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>&copy; 2024 FAQ System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;