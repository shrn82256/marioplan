import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = require('./fbConfigDetails.json');

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export default firebase;