
import Link from 'next/link';

export default function Navigation() {
  return (
    
    <div className={"flex justify-center"}>{/** Nav Container */}
    <div className={"flex relative bg-gray-900 rounded-2xl p-2 m-12 justify-center w-[500px] "}>{/** UL Container */}
      <ul className={"flex flex-row justify-items-center"}>{/** Nav index */}
        <li className={"mr-6"}><Link href="/" className={"text-green-50 hover:text-green-400"}>Home</Link></li>
        <li className={"mr-6"}><Link href="/about" className={"text-green-50 hover:text-green-400"}>About</Link></li>
        <li className={"mr-6"}><Link href="/projects" className={"text-green-50 hover:text-green-400"} disabled>Projects</Link></li>
        <li className={"mr-6"}><Link href="/blog" className={"text-green-50 hover:text-green-400"} disabled>Blog</Link></li>
      </ul>
    </div>
    </div>
  );
}

