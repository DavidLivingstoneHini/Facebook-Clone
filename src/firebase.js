import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8I0pRsRl8QYmRbHBAS4TpKGKls-BptpM",
    authDomain: "facebook-clone-a1ffc.firebaseapp.com",
    databaseURL: "https://facebook-clone-a1ffc.firebaseio.com",
    projectId: "facebook-clone-a1ffc",
    storageBucket: "facebook-clone-a1ffc.appspot.com",
    messagingSenderId: "308191030296",
    appId: "1:308191030296:web:40a2c6856370d3e16ee76d",
    measurementId: "G-ZKHRNSJDWG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;