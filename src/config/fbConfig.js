import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAG9wjKkw1SpgAiaj5qSK9aIAknnqHc9Gs",
  authDomain: "we-grow-9cefe.firebaseapp.com",
  databaseURL: "https://we-grow-9cefe.firebaseio.com",
  projectId: "we-grow-9cefe",
  storageBucket: "we-grow-9cefe.appspot.com",
  messagingSenderId: "1064853451690",
  appId: "1:1064853451690:web:f20132b549c32b4b26b1d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({});

export default firebase;
