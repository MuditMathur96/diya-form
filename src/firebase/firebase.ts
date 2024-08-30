// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJVJ2MpsouVJ6070d-pQie2rT1yZEeDJA",
  authDomain: "form-test-a58fd.firebaseapp.com",
  projectId: "form-test-a58fd",
  storageBucket: "form-test-a58fd.appspot.com",
  messagingSenderId: "648155793298",
  appId: "1:648155793298:web:d784d9fa3daa2d1221e34b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export default app