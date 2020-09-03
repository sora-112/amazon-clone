
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCm4Li8OLmGmDlsHYQBsGd5RqyXvenoI3I",
    authDomain: "clo-ae8bb.firebaseapp.com",
    databaseURL: "https://clo-ae8bb.firebaseio.com",
    projectId: "clo-ae8bb",
    storageBucket: "clo-ae8bb.appspot.com",
    messagingSenderId: "805462901349",
    appId: "1:805462901349:web:ba88ff74fa7048fbe8fc8c",
    measurementId: "G-FYJWNNKCQD"


});


const auth = firebase.auth();

export { auth };