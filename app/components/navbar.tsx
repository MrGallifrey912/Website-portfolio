
import Link from 'next/link';

export default function Navigation() {
  return (
    
    <div className={"flex justify-center"}>{/** Nav Container */}
    <div className={"flex fixed bg-gray-900 rounded-2xl p-2 m-12 justify-center w-[500px] sm:w-[80vw]"}>{/** UL Container */}
    <img class="w-10 h-10 relative rounded-[32px] border border-black justify-start" src="#" />{/** Nav img */}
      <ul className={"flex flex-row justify-items-center"}>{/** Nav index */}
        <li className={"mr-6"}><Link href="/" className={"text-green-50 hover:text-green-400"}>Home</Link></li>
        <li className={"mr-6"}><Link href="/about" className={"text-green-50 hover:text-green-400"}>About</Link></li>
        <li className={"mr-6"}><Link href="/projects" className={"text-green-50 hover:text-green-400"} style={{pointerEvents: "none"}}>Projects</Link></li>
        <li className={"mr-6"}><Link href="/blog" className={"text-green-50 hover:text-green-400"} style={{pointerEvents: "none"}}>Blog</Link></li>
      </ul>
      <a
      className='w-8 h-8 bg-gray-500'>

      </a>
    </div>
    </div>
  );
}

