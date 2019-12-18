var firebaseConfig = {
  apiKey: "AIzaSyA6WjuXHRdq-pPpznxuDN9F8qJSl_qL24k",
  authDomain: "carbuncs-costarica.firebaseapp.com",
  databaseURL: "https://carbuncs-costarica.firebaseio.com",
  projectId: "carbuncs-costarica",
  storageBucket: "carbuncs-costarica.appspot.com",
  messagingSenderId: "458418257445",
  appId: "1:458418257445:web:4db0e4d83dca5274dfc9cc",
  measurementId: "G-VL8PSXL7TH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
