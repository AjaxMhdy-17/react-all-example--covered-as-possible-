
// import { initializeApp } from "firebase/app";

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDJ2OrThNaeWBX-aXSLcoMYuvP5kbd2EZc",
  authDomain: "authentication-basic-7b57f.firebaseapp.com",
  databaseURL: "https://authentication-basic-7b57f-default-rtdb.firebaseio.com",
  projectId: "authentication-basic-7b57f",
  storageBucket: "authentication-basic-7b57f.appspot.com",
  messagingSenderId: "804899649791",
  appId: "1:804899649791:web:36e83524f8b78ee4aaf4ca",
  measurementId: "G-CMPJWD0H0H",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export const googleProvider =  new firebase.auth.GoogleAuthProvider();
export default Firebase ;