import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDomIewZkyv4WT35JkBdrcI6suA0__ygtM",
  authDomain: "lavender-f0.firebaseapp.com",
  projectId: "lavender-f0",
  storageBucket: "lavender-f0.appspot.com",
  messagingSenderId: "897552644079",
  appId: "1:897552644079:web:a686d4bd22d5ecf00ae81a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);