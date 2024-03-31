import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "process.env.FIREBASE_API_KEY",
    authDomain: "portfolio-database-ac923.firebaseapp.com",
    projectId: "portfolio-database-ac923",
    storageBucket: "portfolio-database-ac923.appspot.com",
    messagingSenderId: "process.env.FIREBASE_MESSAGING_SENDER_ID",
    appId: "process.env.FIREBASE_APP_ID",
    measurementId: "process.env.FIREBASE_MEASUREMENT_ID"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export { app, auth };
  