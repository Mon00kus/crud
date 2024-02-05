import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBQn-kU4QNOhEL4jR2ZkxcbvcS90CUvmE",
    authDomain: "reactnativetasklist.firebaseapp.com",
    projectId: "reactnativetasklist",
    storageBucket: "reactnativetasklist.appspot.com",
    messagingSenderId: "314778806552",
    appId: "1:314778806552:web:90e14b51a2f52a075a166d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);