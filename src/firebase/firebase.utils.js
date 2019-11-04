import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyByXb3SRob_KsGf5ZrSURf_lrEJ3_QN_g8",
  authDomain: "crown-db-6c241.firebaseapp.com",
  databaseURL: "https://crown-db-6c241.firebaseio.com",
  projectId: "crown-db-6c241",
  storageBucket: "crown-db-6c241.appspot.com",
  messagingSenderId: "197822759983",
  appId: "1:197822759983:web:776f8dc2ecc35724b3b2da",
  measurementId: "G-SB0EDXKR3F"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
