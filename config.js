import firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyAYAKM67bS-G5y7ds0cy-PQFwp1YvigYQA",
    authDomain: "ciclista-1c91c.firebaseapp.com",
    projectId: "ciclista-1c91c",
    storageBucket: "ciclista-1c91c.appspot.com",
    messagingSenderId: "442637422584",
    appId: "1:442637422584:web:16f3bfc590f08ab7d4d00d"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
