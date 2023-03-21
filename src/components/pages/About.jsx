import React from "react";

export default function About() {
    return (
        <div id="about" className="flex flex-wrap h-100 px-20 justify-center">
                        <h1 className="text-gray-300 text-5xl py-10">About</h1>
                <p className=" text-gray-300 text-2xl">
                    Hiya! I'm <span className="text-teal-200">Cherie (Cherry)</span> a Web Developer with endless
                    excitement for technology and all things futuristic. <br /> <br />
                    
                    My lifelong fascination with computers, gaming, and internet
                    design has led me to journeying the realms of code, solving
                    ways to bring ideas to life. <br /> <br />
                    In 2023 I completed a Full Stack Web Development course and am now building websites
                    and projects with JavaScript, Node.js, and React. <br /> <br />
                    
                    If I'm not breaking and building code, you can find me immersed in physical art projects
                    or in softwares like Affinity Photo. <br /> <br />
                </p>
                {/* <div className="absolute opacity-20">
                    <img src="./src/images/me-blue.png" alt="Cherie Ella Viens" />
                </div> */}
        </div>
    );
}
