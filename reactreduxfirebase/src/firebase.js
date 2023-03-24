import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCx4kub7-UeGOTnpH3HtAt-EeAFLIksnuo",
    authDomain: "react-redux-firebase-8d0c1.firebaseapp.com",
    projectId: "react-redux-firebase-8d0c1",
    storageBucket: "react-redux-firebase-8d0c1.appspot.com",
    messagingSenderId: "28855379109",
    appId: "1:28855379109:web:9262fa5d0311834a08d94c",
    measurementId: "G-KF6221S386"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export { auth,googleAuthProvider,facebookAuthProvider }
 
  // ----------------this is for crud -----------
  // const fireDb = firebase.initializeApp(firebaseConfig);
  // export default fireDb.database().ref();