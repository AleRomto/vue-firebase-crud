// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3zsHZNIrvOu6iivaPKBuX42QyXsmdp6s",
  authDomain: "crud-vue-e8653.firebaseapp.com",
  projectId: "crud-vue-e8653",
  storageBucket: "crud-vue-e8653.appspot.com",
  messagingSenderId: "175574496461",
  appId: "1:175574496461:web:4f4b7696c56359a940a584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };