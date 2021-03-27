import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBKBj78EsHbUnaf55KgAFJRs-AYvsQhgl8",
    authDomain: "softuniexamcars.firebaseapp.com",
    projectId: "softuniexamcars",
    storageBucket: "softuniexamcars.appspot.com",
    messagingSenderId: "990761362420",
    appId: "1:990761362420:web:ceb976d16394fc2c36cfa1"
};


firebase.initializeApp(firebaseConfig);

export default firebase