import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB528WcRDI5R7AVRJqt8eT5navlBW0zdyY",
  authDomain: "logandsign-e0727.firebaseapp.com",
  databaseURL: "https://logandsign-e0727-default-rtdb.firebaseio.com",
  projectId: "logandsign-e0727",
  storageBucket: "logandsign-e0727.appspot.com",
  messagingSenderId: "357924532716",
  appId: "1:357924532716:web:0afdd5bbe0c13f13cfd0c9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
