import firebase from 'firebase'
import 'firebase/firestore'
var config = {
    apiKey: "AIzaSyC9P2ResPQMP08dKHCITAU3U18bltCX4zM",
    authDomain: "bookstore-531e8.firebaseapp.com",
    databaseURL: "https://bookstore-531e8.firebaseio.com",
    projectId: "bookstore-531e8",
    storageBucket: "bookstore-531e8.appspot.com",
    messagingSenderId: "965264144852"
  }; 
  firebase .initializeApp(config);
  const db = firebase.firestore();
  export default db;