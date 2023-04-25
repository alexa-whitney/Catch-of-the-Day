import Rebase from 're-base';
import firebase from 'firebase';
require('dotenv').config()

const firebaseApp = firebase.initializeApp({
  apiKey: "{process.env.REACT_APP_FIREBASE_API_KEY}",
  authDomain: "catch-of-the-day-alexa-whitney.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-alexa-whitney-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
