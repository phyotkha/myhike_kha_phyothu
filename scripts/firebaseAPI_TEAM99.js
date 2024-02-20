//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCizc9YF_T08TWu8yA-TXPSSLj6WN04MKk",
    authDomain: "comp1800-demo-23c61.firebaseapp.com",
    projectId: "comp1800-demo-23c61",
    storageBucket: "comp1800-demo-23c61.appspot.com",
    messagingSenderId: "188145797795",
    appId: "1:188145797795:web:99794f76bf83afb7f7cd16"
  };
  

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
