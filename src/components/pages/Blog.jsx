import React from 'react';

export default function Blog() {
  return (
    <div className="pt-20">
      <div className=" projectsBox flex flex-wrap justify-center m-9 p-9 gap-20 text-orange-600 bg-slate-900">
            <a href="" target="_blank"className="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    className=" projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/moonlander-grey.png"
                    alt="The Little Tech Blog"
                />
                <div className="absolute h-auto w-100 object-contain">Moonlander Keyboard</div>
            </a>
            <a href="" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96 ">
                <img
                    className=" projectBox h-auto w-100 object-scale-down shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/code.png"
                    alt="M.A.T.E"
                />
                <div className="absolute h-auto w-100 object-contain">Coming Soon</div>
            </a>
            <a href="" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96">
                <img
                    className="projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/code.png"
                    alt="Coming Soon"
                />
                <div className="absolute h-auto w-100 object-contain">Coming Soon</div>
            </a>
            <a href="" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96">
                <img
                    className="projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/code.png"
                    alt="Coming Soon"
                />
                <div className="absolute h-auto w-100 object-contain">Coming Soon</div>
            </a>
            <a href="" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96">
                <img
                    className="projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/code.png"
                    alt="Coming Soon"
                />
                <div className="absolute h-auto w-100 object-contain">Coming Soon</div>
            </a>
            <a href="" target="_blank" className="group flex flex-col items-center text-center justify-center relative w-96">
                <img
                    className="projectBox h-auto w-100 object-contain shadow-neon group-hover:opacity-10 transition duration-300 ease-in-out hover:scale-110 rounded-md"
                    src="./src/images/code.png"
                    alt="Coming Soon"
                />
                <div className="absolute h-auto w-100 object-contain">Coming Soon</div>
            </a>
        </div>
    </div>
  );
}