import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "./firebase";


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = 'An error occurred. Please try again.';
      if (errorCode === 'auth/account-exists-with-different-credential') {
        errorMessage = 'An account already exists with the same email address but different sign-in credentials.';
      } else if (errorCode === 'auth/operation-not-supported-in-this-environment') {
        errorMessage = 'Google Sign-In may not be supported in this environment.';
      } else {
        console.error(error); // Log the original error for debugging
      }
      alert(errorMessage);
    }
  };

  const handleEmailSignIn = async () => {
    const email = prompt('Enter your email:');
    const password = prompt('Enter your password:');
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = 'Invalid email or password.';
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
        errorMessage = 'Invalid email or password combination.';
    } else {
      console.error(error); // Log the original error for debugging
    }
    alert(errorMessage);
  };

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[500px] before:w-full sm:before:w-[500px] before:-translate-x-2/2 before:rounded-full before:bg-gradient-conic before:from-green before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[250px] after:w-full sm:after:w-[180px] after:translate-x-2/3 after:bg-gradient-conic after:from-green-700 after:via-green-700 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-300 before:dark:opacity-30 after:dark:from-green-900 after:dark:via-[#229044] after:dark:opacity-30 before:lg:h-[620px] z-[-1] mb-6">
        <Image
          className="relative dark:drop-shadow"
          src="/Andrew D. Jones.png"
          alt="My Logo"
          width={625}
          height={625}
          priority
        />
      </div>

      {/** Resume button */}
      <div className="flex justify-btween">
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button onClick={handleEmailSignIn}>Sign in with Email</button>

          {/* Conditionally rendered resume button */}
          {isLoggedIn && (
            <a
              className="resume-btn relative hover:border-yellow-500 shadow-inner text-white font-bold py-2 px-4 rounded mt-16 mb-16 mr-16"
              href="Resume.pdf"
              download="Andrew-Jones.pdf"
            >
              CV / Resume
            </a>
          )} 
      <a 
        className="contact-btn hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-16 mb-16 ml-16"
        href="/forms"
      >  
        Contact me
      </a>
    </div>

      
      
{/** Start of card buttons */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center lg:justify-items-center">
        <Link
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Services{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            See the services I offer and provide. Contact me if you need something more or have further questions!
          </p>
        </Link>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            Browse templates I have created for all platforms! Shop templates for all ma
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Support and FaQ{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            Click here for General support and Frequently asked questions.
          </p>
        </a>

        <a
          href="https://hostinger.com?REFERRALCODE=1ANDREW173"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hosting{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance text-center`}>
            I utilize Hostinger for all of my hosting needs, They provide a load of good features and are fast most importantly. Click me if youd like to host through hostinger! This is a refferal link.
          </p>
        </a>
      </div>
      
    </main>
    
</>
  );
}
}
