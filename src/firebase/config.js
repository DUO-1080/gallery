import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDslNyl5afqDUyJz7kyuRQZ_faxJqz3Elk',
  authDomain: 'gallery-79316.firebaseapp.com',
  databaseURL: 'https://gallery-79316.firebaseio.com',
  projectId: 'gallery-79316',
  storageBucket: 'gallery-79316.appspot.com',
  messagingSenderId: '768503809583',
  appId: '1:768503809583:web:ccea834049fc26d9c528da',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fireStorage = firebase.storage();
const fireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { fireStore, fireStorage, timestamp };
