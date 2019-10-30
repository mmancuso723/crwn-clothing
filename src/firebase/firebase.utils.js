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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
