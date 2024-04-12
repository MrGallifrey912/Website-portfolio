import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex bg-gray-900 justify-center m-1 text-gray-400">
            <div className="flex container justify-between">
                <div className="flex justify-between">
                    <ul className="relative">
                        {/* Github */}
                        <li>
                            <a href="#">FAQ</a> 
                        </li>
                        {/* privacy about cookies and data collection */}
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        {/* some legal statements */}
                        <li>
                            <a href="#">Community</a>
                        </li>
                        {/* team like page? */}
                        <li>
                            <a href="#">References</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center text-center">
                    <p className="relative text-center">Andrew Jones</p>
                </div>
                <div className="flex justify-between">
                    <ul className="relative">
                        {/* Github */}
                        <li>
                            <a href="https://github.com/MrGallifrey912">Github</a> 
                        </li>
                        {/* LinkedIn */}
                        <li>
                            <a href="https://www.linkedin.com/in/andrew-jones-408272286/">LinkedIn</a>
                        </li>
                        {/* Codepen */}
                        <li>
                            <a href="https://codepen.io/MrGallifrey912">CodePen</a>
                        </li>
                        {/* Fiverr */}
                        <li>
                            <a href="https://www.fiverr.com/s/w6qWPv">Fiverr</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}