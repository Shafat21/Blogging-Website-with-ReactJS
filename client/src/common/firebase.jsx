import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0DVHeNNsTDCxbOcAbzevRFDPCkOef6XA",
    authDomain: "blog-website-a4302.firebaseapp.com",
    projectId: "blog-website-a4302",
    storageBucket: "blog-website-a4302.appspot.com",
    messagingSenderId: "315092673980",
    appId: "1:315092673980:web:668bbb0ba17b11077677b9"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}