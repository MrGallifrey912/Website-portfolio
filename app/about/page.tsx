import Education from "./components/eduWidget";

export default function About() {
    return (
        <>
        <Education />
        <main className="flex flex-col container m-auto">
            <div className="container flex flex-col text-center">
                <h1 className="text-4xl">About Me</h1>               
            </div>
            <div className="container flex flex-col bg-gray-700 bg-opacity-50 rounded m-2 p-2">
                <p className="my-2">
                Greetings! My name is Andrew Jones, and I am driven to become a proficient Full Stack Engineer. Initially, I held the belief that programming required choosing a specific path, either as a front-end or back-end developer.
                However, I have always challenged this narrow perspective, considering it limiting and misleading. Initially, I embarked on a journey in front-end web design, under the impression that full application deployment was 
                beyond the scope of a solo engineer. For about six years, I immersed myself in front-end design, only to find myself feeling unfulfilled in this specialization.
                </p>
                <p className="my-2">
                As the landscape of web development evolved with the emergence of DIY builders and content management systems, I felt a sense of obsolescence in my skills. It was at this juncture that I stumbled upon the realm of full stack 
                development, discovering its potential for innovation and growth. Despite the plethora of advice cautioning against it, I embraced this new path wholeheartedly, driven by the excitement of its possibilities.     
                </p>
                <p className="my-2">
                In my professional tenure at ChargeItPro Inc., a reputable third-party payment processing software company, I provided integral account-level support during the tumultuous era of the EMV chip card rollout. This experience 
                served as my initiation into the realm of full-stack software, where I grappled with the complexities of local server installations, API integrations, and regulatory compliance within the US banking infrastructure. Despite 
                the challenges, our collaborative efforts as DevOps and support teams yielded stability amidst the chaos, proving invaluable during the transition to new ownership under Gravity Payments.Reflecting on my role, I navigated 
                a diverse array of responsibilities, from handling incoming support calls to acquiring new skills in network administration, PCI-DSS compliance, automation testing, and agile methodologies. Although I missed out on an opportunity 
                for a tester position, I acknowledge the pivotal role this experience played in shaping my multifaceted skill set, even amid personal challenges such as divorce and continual financial hardships.     
                </p>
                <p className="my-2">
                Today, I embrace a holistic approach to software development, avioding narrow or niche specializations in favor of versatility and adaptability. My philosophy centers on crafting solutions tailored to each project's 
                unique requirements, even if it means diverging from conventional tech stacks. Whether it's leveraging Python over JavaScript or WordPress over mainstream alternatives, I prioritize delivering exceptional results and 
                building robust, scalable technology.    
                </p>
                <p className="my-2">
                Looking ahead, I envision establishing my own media agency soon, dedicated to crafting stunning and innovative designs that push the boundaries of creativity and functionality. This project is just one step closer to my vision, show some love and support 
                by following me on the socials and if you have an idea for a website or application please dont hesitate to contact me.
                </p>
                <p className="my-2">
                Thank you for considering my journey and aspirations. I am excited about the opportunities that lie ahead and eager to contribute to impactful projects within the realm of full stack development.
                </p>
            </div>
            
        </main>
        </>
    );
}