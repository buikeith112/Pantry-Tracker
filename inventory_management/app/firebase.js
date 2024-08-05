// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklSsiRz1bJ5AIN4J-U0pkF76Ib6rV5Vs",
  authDomain: "inventory-management-app-bdd78.firebaseapp.com",
  projectId: "inventory-management-app-bdd78",
  storageBucket: "inventory-management-app-bdd78.appspot.com",
  messagingSenderId: "580932292757",
  appId: "1:580932292757:web:c9eae4ae90a864f7da0b9c",
  measurementId: "G-GJM74Z813L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app);
export {firestore};