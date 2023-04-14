import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImProfile } from "react-icons/im";



export default function Links() {
return (
<>
<div className="flex flew-row gap-5 justify-center pt-5">
<a className="text-teal-300 hover:text-orange-400 animate-bounce" href="https://github.com/CherryElla">
    <FaGithub size={40}/>
</a>
<a className="text-teal-300 hover:text-orange-400 animate-bounce" href="https://www.linkedin.com/in/cherryella/">
    <FaLinkedin size={40}/>
</a>
<a className="text-teal-300 hover:text-orange-400 animate-bounce" href="https://twitter.com/CherieElla">
    <FaTwitter size={40}/>
</a>
<a className="text-teal-300 hover:text-orange-400 animate-bounce" href="/pdf/CherieEllaViensResume.pdf">
    <ImProfile size={40}/>
</a>
</div>
</>
)
}