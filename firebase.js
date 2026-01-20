// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKcrx6VcsT4FR3cvA9DQSLXd8KZVArArs",
  authDomain: "easy-explore.firebaseapp.com",
  projectId: "easy-explore",
  storageBucket: "easy-explore.firebasestorage.app",
  messagingSenderId: "405821004343",
  appId: "1:405821004343:web:d9741b91ebd05aaf0efdb2",
  measurementId: "G-R7N30WW4G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);