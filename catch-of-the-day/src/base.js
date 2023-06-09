import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDiTpcY2FiLVFXuOZGXVU_Sk2SFCHO1nTc",
  authDomain: "catch-of-the-day-alexa-whitney.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-alexa-whitney-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-alexa-whitney",
  storageBucket: "catch-of-the-day-alexa-whitney.appspot.com",
  messagingSenderId: "204346228142",
  appId: "1:204346228142:web:63e50ae5bd1d3a1ebb9c3f",
  measurementId: "G-TJ8BEBGRWM"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
