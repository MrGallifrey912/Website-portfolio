

export default function Education() {
    return (
        <>
        <div className="container flex justify-center bg-gray-700">
        <div>
            <h3>tryHackMe.com</h3>
            <a href="https://tryhackme.com/p/andrewjones.tech">
                <img src="https://tryhackme-badges.s3.amazonaws.com/andrewjones.tech.png" alt="TryHackMe"></img>
            </a>
        </div>

        
        <ul>
        <label><a href="https://www.credly.com/users/andrew-jones.6e832892">Credly Profile</a></label>
        <li>
        <a href="https://www.credly.com/badges/6cb2a0f6-6aef-46b3-914b-27b11ec77adf">
            <img src="https://images.credly.com/size/340x340/images/5fc2d535-e716-46c4-881a-f4822b8da0e5/Cognitive_Class_-_What_is_Data_Science.png"></img>
        </a>
        </li>
        <li>
        <a href="https://www.credly.com/badges/385256c6-10f5-4b82-9867-f16ac2a453bd">
            <img src="https://images.credly.com/size/340x340/images/0571ab1d-f43b-43d9-9c68-8ebd0ebd61b7/Python_for_Data_Sci_and_AI_Foundational.png"></img>
        </a>
        </li>
        <li>
        <a href="https://www.credly.com/badges/80794f42-34f2-47bf-a0f3-e351f11ca749">
            <img src="https://images.credly.com/size/340x340/images/46defa53-a922-47bd-94ea-b43488f5cd8a/Data_Science_Methodology_Foundational.png"></img>
        </a>
        </li>
        <li>
        <a href="https://www.credly.com/badges/9b69f7a2-35e5-4a66-b111-d73a85ff7311">
            <img src="https://images.credly.com/size/340x340/images/1447954e-9923-4703-a647-eac80e5f0682/image.png"></img>  {/** mismatched img background */} 
        </a>
        </li>
        </ul>
        <div className="flex center text-center m-4">
            <ul>
                <label>freeCodeCamp.org Certs</label>
                <li>
                    <a href="https://www.freecodecamp.org/certification/mrgallifrey912/responsive-web-design">
                Responsive Web Design Cert</a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/mrgallifrey912/javascript-algorithms-and-data-structures-v8">
                JavaScript Algorithms and Data Structures (Beta)</a>
                </li>
            </ul>
        </div>
        </div>
        </>
    );
}