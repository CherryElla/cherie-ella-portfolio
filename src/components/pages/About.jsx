import React from "react";

export default function About() {
    return (
        <div className="pt-20 sm:pb-32 text-center sm:text-left">
            <img
                className="w-screen fixed left-0 top-0 h-screen object-cover pointer-events-none -z-10"
                src="/images/tree-layer.png"
                alt="divider"
            />
            <h2 className="text-gray-300 text-5xl mb-10 text-center">About</h2>
            <div className="flex flex-col sm:flex-row px-14 justify-center sm:pl-32">
                <p className=" text-gray-300 text-2xl mb-20">
                    Hiya! I'm
                    <span className="text-teal-200"> Cherie (Cherry) Ella</span>
                    &nbsp;a Web Developer with endless excitement for technology
                    and all things futuristic. <br /> <br />
                    My lifelong fascination with computers, gaming, and internet
                    design has led me to journeying the realms of code and
                    solving ways to bring ideas to life. <br /> <br />
                    In 2023 I became a Full Stack Web Developer / Software
                    Engineer, and now build websites and projects with
                    JavaScript, Node.js, React and more. <br /> <br />
                    If I'm not breaking and building code, you can find me
                    immersed in physical art projects or in softwares like
                    Affinity Photo.
                    <br /> <br />
                    Technical Skills and Softwares
                    <br /> <br />
                    <small className=" text-teal-200">
                        JavaScript | Node.js | SQL | Apollo | React.js | Tailwind | Vite 
                    </small>
                </p>
                <div className="opacity-10">
                    <img
                        className=""
                        src="/images/me-blue.png"
                        alt="Cherie Ella Viens"
                    />
                </div>
            </div>
        </div>
    );
}
