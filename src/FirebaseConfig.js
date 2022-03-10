
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBkoUP3wMdDKrDBaExFe3aTxe4-vnyY_s",
  authDomain: "falabella-hackaton.firebaseapp.com",
  projectId: "falabella-hackaton",
  storageBucket: "falabella-hackaton.appspot.com",
  messagingSenderId: "666198014674",
  appId: "1:666198014674:web:8020db73e4ca24e41ecb0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;