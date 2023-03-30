import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className=" text-orange-600 px-10 gap-5 flex flex-col border-solid border-2 border-t-orange-600 border-b-0 border-l-0 border-r-0">
            <div className="flex flew-row gap-5 justify-center pt-5">
                <a className="" href="https://github.com/CherryElla">
                    <FaGithub size={40}/>
                </a>
                <a href="https://www.linkedin.com/in/cherryella/">
                    <FaLinkedin size={40}/>
                </a>
                <a href="https://twitter.com/CherieElla">
                    <FaTwitter size={40}/>
                </a>
            </div>

            <div className="text-center">{`Copyright © Cherie Ella Viens ${year}`}</div>
        </footer>
    );
}
