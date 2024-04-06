
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
    <div className={"flex justify-center mt-0"}>{/** Nav Container */}
    <div className={"flex fixed bg-gray-900 rounded-2xl p-2 m-12 mt-0 justify-evenly w-[600px]"}>{/** UL Container */}
    <img className="w-10 h-10 relative rounded-[32px] border border-black justify-start" src="/IMG_2649.jpg" />{/** Nav img */}
      <ul className={"flex flex-row justify-items-center"}>
        <li className={"mr-6"}><Link href="/" className={"text-green-50 hover:text-green-400"}>Home</Link></li>
        <li className={"mr-6"}><Link href="/about" className={"text-green-50 hover:text-green-400"}>About</Link></li>
        <li className={"mr-6"}><Link href="/projects" className={"text-green-50 hover:text-green-400"} style={{pointerEvents: "none"}}>Projects</Link></li>
        <li className={"mr-6"}><Link href="/blog" className={"text-green-50 hover:text-green-400"} style={{pointerEvents: "none"}}>Blog</Link></li>
      </ul>
      {/** Add user logic here */}
      <Link
      className="w-8 h-8 bg-gray-500"
      href="/email-signup">
      </Link>
    </div>
    </div>
    </>
  );
}

