import React from "react";

export default function Projects() {
    return (
        <div className=" projectsBox flex justify-center m-9 p-9 gap-20 text-orange-600 bg-slate-900">
            <a href="https://the-little-tech-blog.herokuapp.com/" target="_blank"className="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    className=" projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/little-tech-blog-grey.png"
                    alt="The Little Tech Blog"
                />
                <div className="absolute h-auto w-100 object-contain ">The Little Tech Blog</div>
            </a>
            <a href="https://my-awesome-text-editor.herokuapp.com/" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    className=" projectBox h-auto w-100 object-scale-down shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/mate-grey.png"
                    alt="M.A.T.E"
                />
                <div className="absolute h-auto w-100 object-contain">My Awesome Text Editor</div>
            </a>
            <a href="" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96">
                <img
                    className="projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/old-comp-grey.png"
                    alt="Coming Soon"
                />
                <div className="absolute h-auto w-100 object-contain">Coming Soon</div>
            </a>
        </div>
    );
}
