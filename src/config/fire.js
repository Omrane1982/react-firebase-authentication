import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyALZT_P8za_BxZdJwZ4JMBlSVnthkVH-2Q",
    authDomain: "omrane-app.firebaseapp.com",
    databaseURL: "https://omrane-app.firebaseio.com",
    projectId: "omrane-app",
    storageBucket: "omrane-app.appspot.com",
    messagingSenderId: "709194376140",
    appId: "1:709194376140:web:6faf5aa60af84947"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
