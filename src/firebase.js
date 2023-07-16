import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8rP3RJjV2AIbffRCa63KlG5Yq1PdVIHI",
    authDomain: "dealzone-ae462.firebaseapp.com",
    projectId: "dealzone-ae462",
    storageBucket: "dealzone-ae462.appspot.com",
    messagingSenderId: "435387881379",
    appId: "1:435387881379:web:76d6e329d7e04f7aaa6c16",
    measurementId: "G-W6299YXC0R"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

