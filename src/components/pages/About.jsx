import React from "react";

export default function About() {
    return (
        <div className="flex flex-wrap h-100 pt-20 justify-center">
                <p className=" text-gray-300 p-20 text-2xl">
                    Hiya! I'm <h1 className="text-teal-200">Cherie (Cherry)</h1>a Web Developer with endless
                    excitement for technology and all things futuristic. <br /> <br />
                    
                    My lifelong fascination with computers, gaming, and internet
                    design has led me to journeying the realms of code, solving
                    ways to bring ideas to life. <br /> <br />
                    In 2023 I completed a Full Stack Web Development course and am now building websites
                    and project pieces with JavaScript, Node.js, and React. <br /> <br />
                    
                    If I'm not breaking and building code, you can find me immersed in physical art projects
                    or in softwares like Affinity Photo. <br /> <br />
                    Let's connect and see what we can create together!"
                </p>
                <div className="absolute opacity-20">
                    <img src="./src/images/me-blue.png" alt="Cherie Ella Viens" />
                </div>
        </div>
    );
}
