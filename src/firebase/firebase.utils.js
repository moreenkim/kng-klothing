import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDPK9MUCiWfLPLqxjZvIpcdSTr3WPl-iBI',
  authDomain: 'kng-klothing-db.firebaseapp.com',
  databaseURL: 'https://kng-klothing-db.firebaseio.com',
  projectId: 'kng-klothing-db',
  storageBucket: 'kng-klothing-db.appspot.com',
  messagingSenderId: '634409057482',
  appId: '1:634409057482:web:7108b3642b573c6940c833',
  measurementId: 'G-FCNZDL70BJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
