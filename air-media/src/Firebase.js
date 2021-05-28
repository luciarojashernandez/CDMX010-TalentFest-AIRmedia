import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE2Rl7Gj-DKQVB7eNDiUCNUqigV52vvAE",
  authDomain: "darkitchen-s.firebaseapp.com",
  projectId: "darkitchen-s",
  storageBucket: "darkitchen-s.appspot.com",
  messagingSenderId: "1027943070598",
  appId: "1:1027943070598:web:76c872d2e814b79846ca07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
