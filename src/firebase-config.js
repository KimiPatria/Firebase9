import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJlep4FGpL8no1eBsjaVb_oWpxZWCbXJw",
  authDomain: "jogja-u-two.firebaseapp.com",
  projectId: "jogja-u-two",
  storageBucket: "jogja-u-two.appspot.com",
  messagingSenderId: "1029650113793",
  appId: "1:1029650113793:web:e2a6bceb11c4f1acfa2700",
  measurementId: "G-GSQD6DW8ER"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)