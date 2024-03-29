import React from "react";


export default function Portfolio() {
    return (
        <div id="portfolio" className="sm:mt-20 justify-center text-center">
            <h1 className="text-gray-300 text-5xl">Projects</h1>
            <div id="portfolio" className=" projectsBox flex flex-wrap justify-center m-9 p-9 gap-20 text-teal-500 font-bold bg-slate-900">
            <a href="https://georgia-evergreens.herokuapp.com/" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96">
                <img
                    className="projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="/images/georgia-evergreens.png"
                    alt="Georgia Evergreens E-Commerce Website"
                />
                <div className="absolute h-auto w-100 object-contain bg-slate-900 p-1 rounded">Georgia Evergreens E-Commerce Website</div>
            </a>
            <a href="https://quaz711.github.io/Underground/" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    className=" projectBox h-auto w-100 object-scale-down shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="/images/underground.png"
                    alt="Underground Application"
                />
                <div className="absolute h-auto w-100 object-contain bg-slate-900 p-1 rounded">Spotify Music API Application</div>
            </a>
            <a href="https://the-little-tech-blog.herokuapp.com/" target="_blank"className="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    className=" projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="/images/little-tech-blog-grey.png"
                    alt="The Little Tech Blog"
                />
                <div className="absolute h-auto w-100 object-contain bg-slate-900 p-1 rounded">The Little Tech Blog Website</div>
            </a>
            <a href="https://my-awesome-text-editor.herokuapp.com/" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    className=" projectBox h-auto w-100 object-scale-down shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="/images/mate-grey.png"
                    alt="M.A.T.E"
                />
                <div className="absolute h-auto w-100 object-contain bg-slate-900 p-1 rounded">My Awesome Text Editor App</div>
            </a>
            
        </div>
        </div>
    );
}
