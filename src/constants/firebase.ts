// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbam-T23RzLL8otkcMl5PLQxhAH9ZGx24',
  authDomain: 'battechweb.firebaseapp.com',
  projectId: 'battechweb',
  storageBucket: 'battechweb.appspot.com',
  messagingSenderId: '43443313985',
  appId: '1:43443313985:web:07c3a19247ab96f74295c0',
  measurementId: 'G-6GYFTQ1WWY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
