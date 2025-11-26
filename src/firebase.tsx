// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAriz8iUgjaZB5vssf_YszIKVYtS8jkh2I",
  authDomain: "paytimer-61bd8.firebaseapp.com",
  projectId: "paytimer-61bd8",
  storageBucket: "paytimer-61bd8.appspot.com",
  messagingSenderId: "641053469991",
  appId: "1:641053469991:web:841a04397408cb3cbf0d02",
  measurementId: "G-Q2YFMNJTW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);