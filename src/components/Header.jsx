import React from "react";

function parallax () {
    let { scrollY } = window;

    road.style.top = 0.5 * scrollY + 'px';
    mountain.style.top = (150 +0.05 * scrollY) + 'px'; 
    moon.style.left = 1.1 * scrollY + 'px';
    sky.style.top = -1.2 * scrollY + 'px';
    midnight.style.top = (120 + -1.5 * scrollY) + 'px';
}

export default function Header() {
    return (
        <header className="">
                        <div className="parallax-item translate-z-0 ">
            <h1 className="text-center text-gray-200 text-8xl ">
                Cherie Ella
            </h1>
            </div>
            <div className="parallax-item translate-z-1">
                <img
                    className="w-screen p-9"
                    src="./src/images/moon.png"
                    alt="orange moon"
                />
            </div>
            <div className="parallax-item translate-z-2 ">
                <img
                    className="w-screen"
                    src="./src/images/cloud-layer-1.png"
                    alt="clouds"
                />
            </div>
            <div className="parallax-item translate-z-2 ">
            <img
                className="w-screen"
                src="./src/images/cloud-layer-2.png"
                alt="clouds"
            />
            </div>
            {/* <div className="parallax-item translate-z- ">
            <img
                className="w-screen"
                src="./src/images/skyline.png"
                alt="futuristic skyline"
            />
            </div> */}

        </header>
    );
}
