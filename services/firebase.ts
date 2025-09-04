


// FIX: Changed firebase imports to use @firebase scoped packages to resolve module resolution errors.
import { initializeApp, getApps, getApp } from '@firebase/app';
import { getDatabase } from '@firebase/database';
import { getAuth } from '@firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCepqfYX3FxHRQRVmd9RbASmkUHBGnbvVE",
  authDomain: "faq-real.firebaseapp.com",
  databaseURL: "https://faq-real-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "faq-real",
  storageBucket: "faq-real.firebasestorage.app",
  messagingSenderId: "30816639570",
  appId: "1:30816639570:web:05ad1e97e8d6e7d1471d8b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


// Initialize Firebase Realtime Database and get a reference to the service
const db = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };