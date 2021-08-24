import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDTb1PnZxKbrjJ0Y9scbcsbzqNY9G9cf-g",
    authDomain: "project60-9a53f.firebaseapp.com",
    databaseURL: "https://project60-9a53f-default-rtdb.firebaseio.com",
    projectId: "project60-9a53f",
    storageBucket: "project60-9a53f.appspot.com",
    messagingSenderId: "871774367228",
    appId: "1:871774367228:web:7eae97c509740745569679"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database()
 
