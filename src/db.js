import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC30DdK9IcO2rnACpL_9mHT2y2NkrJGogs',
  authDomain: 'nakupni-seznam-d346b.firebaseapp.com',
  projectId: 'nakupni-seznam-d346b',
  storageBucket: 'nakupni-seznam-d346b.appspot.com',
  messagingSenderId: '146065874773',
  appId: '1:146065874773:web:5e1a2ce02661bc52e5d9dc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
