import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcMreDOcHgcQfjphk_VioO-_JMrG7B8to",
  authDomain: "dropbox-aab25.firebaseapp.com",
  projectId: "dropbox-aab25",
  storageBucket: "dropbox-aab25.appspot.com",
  messagingSenderId: "498275856619",
  appId: "1:498275856619:web:88d14dbd704eedf07fceae",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
