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

try {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log("Firebase initialized successfully!");
} catch (error) {
  console.error("Firebase initialization failed:", error.message);
}

export { app, auth };
  