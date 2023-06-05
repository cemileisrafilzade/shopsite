import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD0riFVj92_bZ07q2grIC0mUQuVSUIS7yU",
  authDomain: "easyshop-225a1.firebaseapp.com",
  projectId: "easyshop-225a1",
  storageBucket: "easyshop-225a1.appspot.com",
  messagingSenderId: "915638089404",
  appId: "1:915638089404:web:a9e063122a213d354c82b9",
  measurementId: "G-GMCP79TCMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

export const signInAuth = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return true;
  } catch (error) {
    return { error: error.message };
  }
};
export const signOutAuth = async (auth) => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};

console.log(auth.currentUser);
