// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIumldwacgwK39n7RRy0v7T13IU1kr6w0",
  authDomain: "ecommerce-react-9aa2d.firebaseapp.com",
  projectId: "ecommerce-react-9aa2d",
  storageBucket: "ecommerce-react-9aa2d.firebasestorage.app",
  messagingSenderId: "860656485467",
  appId: "1:860656485467:web:0b4d8d3ca0c578c4c86b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);