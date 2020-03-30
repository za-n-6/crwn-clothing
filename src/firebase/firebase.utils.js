import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyCh_B2806CqiL1IevF6RboBkd6MPPk7kno",
    authDomain: "crown-db-3.firebaseapp.com",
    databaseURL: "https://crown-db-3.firebaseio.com",
    projectId: "crown-db-3",
    storageBucket: "crown-db-3.appspot.com",
    messagingSenderId: "140094532130",
    appId: "1:140094532130:web:c9698c00f14ea7b948387b",
    measurementId: "G-W8HD9RLM9B"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle =() => auth.signInWithPopup(provider);
  
  export default firebase;
