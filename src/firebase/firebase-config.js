
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBW-xVz9vi7NaxdWojwEmEYjnk-UWFzNy8",
  authDomain: "vollink-4b6b2.firebaseapp.com",
  projectId: "vollink-4b6b2",
  storageBucket: "vollink-4b6b2.appspot.com",
  messagingSenderId: "102181436934",
  appId: "1:102181436934:web:e60ba9af76ee110eb00d87",
  measurementId: "G-86WZLRGCY8"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);