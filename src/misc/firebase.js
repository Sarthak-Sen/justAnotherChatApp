/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyD1n29kQ8hFt1xFqrReo6WaDfUrt8rbdtc',
  authDomain: 'chat-web-app-d7bd8.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-d7bd8-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-d7bd8',
  storageBucket: 'chat-web-app-d7bd8.appspot.com',
  messagingSenderId: '198512902087',
  appId: '1:198512902087:web:fb435a5df9bb7d925da3e2',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
