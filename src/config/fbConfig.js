import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDJtoWZ58UfjmEUK8HJiBquLbtia9u89wM",
  authDomain: "myplan-be6fc.firebaseapp.com",
  databaseURL: "https://myplan-be6fc.firebaseio.com",
  projectId: "myplan-be6fc",
  storageBucket: "myplan-be6fc.appspot.com",
  messagingSenderId: "151713798388",
  appId: "1:151713798388:web:b8674ea02fdd93243966a1",
  measurementId: "G-C22C6TSS1G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

