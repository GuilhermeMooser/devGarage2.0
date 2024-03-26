
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB_FGI9ImqGzko01rcmbpl62ZIgM6feSlY",
    authDomain: "devgarage-e2666.firebaseapp.com",
    databaseURL: "https://devgarage-e2666-default-rtdb.firebaseio.com",
    projectId: "devgarage-e2666",
    storageBucket: "devgarage-e2666.appspot.com",
    messagingSenderId: "800744581056",
    appId: "1:800744581056:web:d04d291cfcde9867ab4a25"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };