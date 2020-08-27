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

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error craeting user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
