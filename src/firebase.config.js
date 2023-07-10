 
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyAoCB8S5669EcG-Hq9GRtjYt_gyhuteyOI",
  authDomain: "blood-care-website.firebaseapp.com",
  projectId: "blood-care-website",
  storageBucket: "blood-care-website.appspot.com",
  messagingSenderId: "860040193799",
  appId: "1:860040193799:web:4817f99c6cf0066c6647a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);