import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT0sn9O6MFUeVhYPdJ0OGNTVPFHhUcy8k",
  authDomain: "cprg306-assignments-40b8d.firebaseapp.com",
  projectId: "cprg306-assignments-40b8d",
  storageBucket: "cprg306-assignments-40b8d.firebasestorage.app",
  messagingSenderId: "823874881912",
  appId: "1:823874881912:web:387e3c5e47c4d5f638a08d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
