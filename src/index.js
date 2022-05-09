import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARxKcKmrcqklDpCF1LbSk-azbWU8ymmOM",
  authDomain: "toffo-paste.firebaseapp.com",
  projectId: "toffo-paste",
  storageBucket: "toffo-paste.appspot.com",
  messagingSenderId: "94127543129",
  appId: "1:94127543129:web:11267f968e79b81ad73248"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
