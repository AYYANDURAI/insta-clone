import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7BrH-i6kgM6ZY3PbFCf-f17jCqWUnTfI",
    authDomain: "insta-clone-e3950.firebaseapp.com",
    databaseURL: "https://insta-clone-e3950.firebaseio.com",
    projectId: "insta-clone-e3950",
    storageBucket: "insta-clone-e3950.appspot.com",
    messagingSenderId: "429081907873",
    appId: "1:429081907873:web:45b8e0328d7f8d01d116e0",
    measurementId: "G-2X9MD78FRB"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };