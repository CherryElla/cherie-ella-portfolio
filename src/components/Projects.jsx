import React from "react";

export default function Projects() {
    return (
        <div class=" projectsBox flex justify-center m-9 p-9 gap-20 text-purple-800 bg-slate-900">
            <a href="" class="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    class=" projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-5 "
                    src="./src/images/little-tech-blog-pink.png"
                    alt="The Little Tech Blog"
                />
                <div class="absolute h-auto w-100 object-contain">The Little Tech Blog</div>
            </a>
            <a href="" class="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    class=" projectBox h-auto w-100 object-scale-down shadow-neon group-hover:opacity-5"
                    src="./src/images/mate.png"
                    alt="M.A.T.E"
                />
                <div class="absolute h-auto w-100 object-contain">My Awesome Text Editor</div>
            </a>
            <a href="" class="group flex flex-col items-center text-center justify-center relative w-96">
                <img
                    class="projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-5"
                    src="./src/images/old-comp.png"
                    alt="Coming Soon"
                />
                <div class="absolute h-auto w-100 object-contain">Coming Soon</div>
            </a>
        </div>
    );
}
