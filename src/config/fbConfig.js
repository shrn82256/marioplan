import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = require('./fbConfigDetails.json');
// Initialize Firebase
/*
var config = {
  apiKey: "AIzaSyB4iR053dFKite06trS0vYG8EZN-ED96gs",
  authDomain: "marioplan-bad21.firebaseapp.com",
  databaseURL: "https://marioplan-bad21.firebaseio.com",
  projectId: "marioplan-bad21",
  storageBucket: "marioplan-bad21.appspot.com",
  messagingSenderId: "138454192728"
};
*/
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export default firebase;