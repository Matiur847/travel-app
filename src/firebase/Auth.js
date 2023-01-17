// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqbi9o7xLXN1Uk0VFwgIs-XQqZT_iXDHA",
    authDomain: "travel-app4.firebaseapp.com",
    projectId: "travel-app4",
    storageBucket: "travel-app4.appspot.com",
    messagingSenderId: "963177392742",
    appId: "1:963177392742:web:e070ff3b8928f6f7cddba7"
};

// Initialize Firebase
const configFirebase = initializeApp(firebaseConfig);

export default configFirebase;