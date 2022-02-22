import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: "362749030636",
    appId: "1:362749030636:web:258e83e86d573f6a58b5c9",
    measurementId: "G-ERDP7BTDGE"
};

// INITIALIZING APP
firebase.initializeApp(config);

// AUTH & STORAGE SETUP
export const auth = firebase.auth();
export const firestore = firebase.firestore()

// INITIALIZING GOOGLE SIGNUP
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;