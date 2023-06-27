import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBcO8Iko0JuEquGq05SMfO64LrLMj-SNaA',
  authDomain: 'nextflix-app-a64a1.firebaseapp.com',
  projectId: 'nextflix-app-a64a1',
  storageBucket: 'nextflix-app-a64a1.appspot.com',
  messagingSenderId: '434608591598',
  appId: '1:434608591598:web:e2118133d731e706ead9ff',
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
