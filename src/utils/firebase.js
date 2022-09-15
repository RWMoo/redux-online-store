import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API,
  authDomain: "redux-store-36e06.firebaseapp.com",
  projectId: "redux-store-36e06",
  storageBucket: "redux-store-36e06.appspot.com",
  messagingSenderId: "310513727592",
  appId: "1:310513727592:web:80f7d467ab20e58930e3dd",
  measurementId: "G-XH26FSZ982",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
