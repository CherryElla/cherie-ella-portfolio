import React from "react";


export default function Portfolio() {
    return (
        <div class="projectsBox z-10 flex m-9 p-9 grid-cols-3 gap-4 text-purple-800 bg-slate-900">
            <div class="text-center">
                <img
                    class=" projectBox h-80 w-100 object-contain shadow-neon"
                    src="./src/images/little-tech-blog-pink.png"
                    alt=""
                />
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="rounded px-6 pt-2.5 pb-2 
                    text-xs font-medium uppercase 
                    leading-normal text-primary transition 
                    duration-150 ease-in-out hover:bg-neutral-100 
                    hover:text-primary-600 focus:text-primary-600 
                    focus:outline-none focus:ring-0 active:text-primary-700
                    dark:hover:bg-neutral-700"
                >
                    The Little Tech Blog
                </button>
            </div>
            <div class="text-center">
                <img
                    class=" projectBox h-80 w-100 object-scale-down shadow-neon"
                    src="./src/images/mate.png"
                    alt=""
                />
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700"
                >
                    M.A.T.E - Text Editor
                </button>
            </div>
            <div class="text-center">
                <img
                    class="projectBox h-80 w-100 object-contain shadow-neon"
                    src="./src/images/old-comp.png"
                    alt=""
                />
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700"
                >
                    Coming Soon
                </button>
            </div>
        </div>
    );
}
