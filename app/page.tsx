import React from "react";
import Image from "next/image";
import Link from "next/link";





export default function Home() {
  
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
      <a 
        className="resume-btn relative border border-transparent hover:border-yellow-500 shadow-inner text-white font-bold py-2 px-4 rounded mt-16 mb-16 mr-16"
        href="Resume.pdf"
        download="Andrew-Jones.pdf">  
        Resume
      </a> 
      <a 
        className="contact-btn hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-16 mb-16 ml-16"
        href="/forms"
        >  
        Contact
      </a>
    </div>

      
      
{/** Start of card buttons */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Services{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See the services I offer and provide. contact me if you need something more or have further questions.
          </p>
        </Link>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes! Utilize this most inportantly, test your knowledge with quizzes.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js. Gives you templates to work with, use them to explore the code that makes them.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel. This takes you to vercel to deploy. vercel seems pretty cool! like github.
          </p>
        </a>
      </div>
      
    </main>
    
</>
  );
}
