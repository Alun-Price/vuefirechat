import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  // API KEYS
  apiKey: "AIzaSyCpoVSjMqk0PTeIfHHrE91z2sorYLvHX1U",
  authDomain: "vuefirechat-5e9f7.firebaseapp.com",
  projectId: "vuefirechat-5e9f7",
  storageBucket: "vuefirechat-5e9f7.appspot.com",
  messagingSenderId: "268678987243",
  appId: "1:268678987243:web:c5708574d2a05115276dae",
};

const database = initializeApp(config);
const db = getDatabase(database);

export default db;
