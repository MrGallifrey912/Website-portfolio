import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "",
    authDomain: "portfolio-database-ac923.firebaseapp.com",
    projectId: "portfolio-database-ac923",
    storageBucket: "portfolio-database-ac923.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export { app, auth };
  