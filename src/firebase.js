 import firebase from 'firebase/app';
 import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyDQxmGUA9yC00nICGoFI-NBO1scPslYtwE",
    authDomain: "fb-crud-react-e2849.firebaseapp.com",
    databaseURL: "https://fb-crud-react-e2849.firebaseio.com",
    projectId: "fb-crud-react-e2849",
    storageBucket: "fb-crud-react-e2849.appspot.com",
    messagingSenderId: "940187908281",
    appId: "1:940187908281:web:6fad92e9f19d10f62a4368"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
