import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDZEVjq2-QE1pNetD6Dl1InTU0bL2uPkhQ",
  authDomain: "toffo-pasteleria.firebaseapp.com",
  projectId: "toffo-pasteleria",
  storageBucket: "toffo-pasteleria.appspot.com",
  messagingSenderId: "760461767999",
  appId: "1:760461767999:web:0afdd27743ae19ecf58f8a"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
