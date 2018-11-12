import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAvvdOUA0EaakE24F0gDZdFEmmxN69h3YM",
  authDomain: "learn-react-135d8.firebaseapp.com",
  databaseURL: "https://learn-react-135d8.firebaseio.com",
  projectId: "learn-react-135d8",
  storageBucket: "learn-react-135d8.appspot.com",
  messagingSenderId: "705357065259"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 