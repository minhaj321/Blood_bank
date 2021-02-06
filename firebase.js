import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyBTKELH86qmK28lhIQPXxoQjUenUM1bWlM",
  authDomain: "blood-bank-f459a.firebaseapp.com",
  databaseURL: "https://blood-bank-f459a-default-rtdb.firebaseio.com",
  projectId: "blood-bank-f459a",
  storageBucket: "blood-bank-f459a.appspot.com",
  messagingSenderId: "853068209795",
  appId: "1:853068209795:web:c8749d3debc998a5b745b6",
  measurementId: "G-RGZ38NXK7Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;