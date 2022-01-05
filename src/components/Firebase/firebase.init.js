import { initializeApp } from "firebase/app";
import FirebaseConfig from "./firebaseConfig";

const initializeFirebase = () => {
  initializeApp(FirebaseConfig);
};

export default initializeFirebase;
