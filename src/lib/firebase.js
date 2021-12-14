import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { seedDatabase } from "../seed";
const config = {
  apiKey: "AIzaSyCKYXiU4tb6a5L6LK-LMyorzvLy7Rmgdh8",
  authDomain: "iightbetv4.firebaseapp.com",
  projectId: "iightbetv4",
  storageBucket: "iightbetv4.appspot.com",
  messagingSenderId: "259370357847",
  appId: "1:259370357847:web:3464142531f43acc7abf12",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase)
export { firebase, FieldValue };
