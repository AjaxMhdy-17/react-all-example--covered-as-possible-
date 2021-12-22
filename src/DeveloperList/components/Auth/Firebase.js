

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBqniAhEH7HIttkkuxPLiABzyyW781pD6A",
    authDomain: "devapp-79755.firebaseapp.com",
    projectId: "devapp-79755",
    storageBucket: "devapp-79755.appspot.com",
    messagingSenderId: "888934538549",
    appId: "1:888934538549:web:ad2a8c132e9c4a00ad807c",
    measurementId: "G-0FVCZPKB2D"
};


const Firebase = firebase.initializeApp(firebaseConfig);

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export default Firebase ;