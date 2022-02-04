import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD8EkRrzSV-_MYTNidU6fb6xxBQ2obOxC8",
    authDomain: "disc-clone-f624c.firebaseapp.com",
    projectId: "disc-clone-f624c",
    storageBucket: "disc-clone-f624c.appspot.com",
    messagingSenderId: "749081242400",
    appId: "1:749081242400:web:36b140a22c8798dbbf4545",
    measurementId: "G-GC9RTF4Z1M"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
