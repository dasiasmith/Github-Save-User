import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPIJ1qDaDfq-hdWoI97nOpzNyqxYFhN_Y",
    authDomain: "github-save-user.firebaseapp.com",
    projectId: "github-save-user",
    storageBucket: "github-save-user.appspot.com",
    messagingSenderId: "409015307729",
    appId: "1:409015307729:web:a7e426139e43113f3ce4f0",
    measurementId: "G-MQRQ866JWP"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({
    timestampsInSanpshots: true,
})

export default db;
