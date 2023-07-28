import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAcY2ehDSaU9INYcFE1AuUq4vtBFJ3F2aE",
    authDomain: "prochat-5c4f8.firebaseapp.com",
    projectId: "prochat-5c4f8",
    storageBucket: "prochat-5c4f8.appspot.com",
    messagingSenderId: "466562737412",
    appId: "1:466562737412:web:4133228f1bc64c143d9c51"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };