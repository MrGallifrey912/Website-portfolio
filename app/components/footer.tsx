import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex bg-gray-900 justify-center m-1 text-gray-400">
            <div className="flex container justify-between">
                <div className="flex justify-between">
                    <ul className="relative">
                        {/* Github */}
                        <li>
                            <a href="#">Terms of Service</a> 
                        </li>
                        {/* privacy about cookies and data collection */}
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        {/* some legal statements */}
                        <li>
                            <a href="#">Legal</a>
                        </li>
                        {/* team like page? */}
                        <li>
                            <a href="#">References</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-between text-center">
                    <p className="text-center -center">Built by Andrew Jones</p>
                </div>
                <div className="flex justify-between">
                    <ul className="relative">
                        {/* Github */}
                        <li>
                            <a href="#">Github</a> 
                        </li>
                        {/* LinkedIn */}
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                        {/* Codepen */}
                        <li>
                            <a href="#">CodePen</a>
                        </li>
                        {/* Fiverr */}
                        <li>
                            <a href="#">Fiverr</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}