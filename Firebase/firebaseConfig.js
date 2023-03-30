import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAKjBJPm9Ax9nDY-gvz9SKrmXjZauFTALw",
    authDomain: "eat24-5a747.firebaseapp.com",
    projectId: "eat24-5a747",
    storageBucket: "eat24-5a747.appspot.com",
    messagingSenderId: "1045933410421",
    appId: "1:1045933410421:web:b6a3fdba986993592a503c",
    measurementId: "G-L0TCZ8H43K"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }