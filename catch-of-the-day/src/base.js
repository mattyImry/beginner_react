import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDxhv2EoR6OuadZ2Z93UxOJW32evUuebxw",
    authDomain: "catch-of-the-day-matteo-imeri.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-matteo-imeri-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "catch-of-the-day-matteo-imeri",
    storageBucket: "catch-of-the-day-matteo-imeri.appspot.com",
    messagingSenderId: "1030391086375",
    appId: "1:1030391086375:web:b7bc1cec15be8dcf1a3d02",
    measurementId: "G-QEC0CPN4XQ"

});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;