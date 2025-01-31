import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOpyBgplonyQcWckqdPx9O8h2iImnwoYs",
  authDomain: "fir-demolition.firebaseapp.com",
  projectId: "fir-demolition",
  storageBucket: "fir-demolition.appspot.com",
  messagingSenderId: "1080790339695",
  appId: "1:1080790339695:web:3aa2ad38e0af480adabd9a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
