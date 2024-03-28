import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCF3Khstr-tHV-97bIT3IPGKQ5yNXPQECc",
    authDomain: "portfolio-database-ac923.firebaseapp.com",
    projectId: "portfolio-database-ac923",
    storageBucket: "portfolio-database-ac923.appspot.com",
    messagingSenderId: "234045719052",
    appId: "1:234045719052:web:47751baf0f2b372cc22429",
    measurementId: "G-LB281EN7E7"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { app, auth };
  