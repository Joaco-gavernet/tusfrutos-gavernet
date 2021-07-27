import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBT7coFWjPd2GHogFaChDgNe3hJRnV4pBQ",
  authDomain: "tusfrutos-gavernet.firebaseapp.com",
  projectId: "tusfrutos-gavernet",
  storageBucket: "tusfrutos-gavernet.appspot.com",
  messagingSenderId: "951150762525",
  appId: "1:951150762525:web:9e3d0c0d833e252b6f44f4"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}