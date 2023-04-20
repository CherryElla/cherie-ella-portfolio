import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <div id="blog" className="sm:mt-32 ">
            <h2 className="text-center text-gray-300 text-5xl">Blog</h2>
            <div className=" projectsBox flex flex-wrap justify-center m-9 p-9 gap-20 text-teal-500 font-bold">
                <Link
                    to="/blog-post"
                    className="group flex flex-col items-center text-center justify-center relative w-96 "
                >
                    <img
                        className=" projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                        src="/images/moonlander-grey.png"
                        alt="The Little Tech Blog"
                    />
                    <div className="absolute h-auto w-100 object-contain bg-slate-900 p-1 rounded">
                        Moonlander Keyboard
                    </div>
                </Link>
                <a
                    href=""
                    className="group flex flex-col items-center text-center justify-center relative w-96 "
                >
                    <img
                        className=" projectBox h-auto w-100 object-scale-down shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                        src="/images/code.png"
                        alt="M.A.T.E"
                    />
                    <div className="absolute h-auto w-100 object-contain bg-slate-900 p-1 rounded">
                        Coming Soon
                    </div>
                </a>
            </div>
        </div>
    );
}
