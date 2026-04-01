// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBWwpbhaECixZnKK-g-xV-rhsqdGyUeW0",
  authDomain: "devlogg-46eb9.firebaseapp.com",
  projectId: "devlogg-46eb9",
  storageBucket: "devlogg-46eb9.firebasestorage.app",
  messagingSenderId: "49751071632",
  appId: "1:49751071632:web:71cc1d0ff80bfd44083115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider

const auth = getAuth()

export const authWithGoogle = async () => {
    let user = null
    await signInWithPopup(auth, provider).then((result) => {
        user = result.user
    }).catch((err)=> {
        console.log(err);
    })

    return user
}