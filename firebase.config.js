import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCoGAvcmB6F-ZXObz78VTEuvLqmEm2X6eU",
    authDomain: "delivery-app-8cb7a.firebaseapp.com",
    databaseURL: "https://delivery-app-8cb7a-default-rtdb.firebaseio.com",
    projectId: "delivery-app-8cb7a",
    storageBucket: "delivery-app-8cb7a.appspot.com",
    messagingSenderId: "9303665961",
    appId: "1:9303665961:web:a65b1a5e77d5d896755b38"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };