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

   export const createUserProfileDocument = async (userAuth, additionalData  ) => {
       
    if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

            if(!snapShot.exists){
              const { displayName , email } = userAuth;
              const createdAt = new Date(); 

              try {
                await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
                })
              }
              catch (error) {
                console.log('error creating user', error.message)
              }
            }

            return userRef;
   }

   firebase.initializeApp(config);

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();
   
   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({ prompt: 'select_account' });
   export const signInWithGoogle = () => auth.signInWithPopup(provider);
   
   export default firebase;