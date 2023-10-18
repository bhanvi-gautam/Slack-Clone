// import firebase from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBZDT7y81LAOA0fmSRqXcMWc0mDpWGnbQ0",
    authDomain: "slack-clone-b660b.firebaseapp.com",
    projectId: "slack-clone-b660b",
    storageBucket: "slack-clone-b660b.appspot.com",
    messagingSenderId: "224946220059",
    appId: "1:224946220059:web:66ef51714d3949cd87dcbe",
    measurementId: "G-LW7FWMKN6H"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore(); 
  const auth=firebase.auth();//authentication
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;