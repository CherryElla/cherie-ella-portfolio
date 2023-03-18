import React from "react";

export default function Header() {
    return (
        <header className="">
            <div className="parallax-item translate-z-4">
                <img
                    className=""
                    src="./src/images/orange-moon.png"
                    alt="orange moon"
                />
            </div>
            <div className="parallax-item translate-z-3 ">
                <img
                    className=""
                    src="./src/images/cloud-layer-1.png"
                    alt="clouds"
                />
            </div>
            <div className="parallax-item translate-z-3 ">
            <img
                className=""
                src="./src/images/cloud-layer-2.png"
                alt="clouds"
            />
            </div>
            <div className="parallax-item translate-z-2 ">
            <img
                className=""
                src="./src/images/skyline.png"
                alt="futuristic skyline"
            />
            </div>
            <h1 className="text-center parallax-item translate-z-1  text-gray-200 text-8xl pt-80">
                Cherie Ella
            </h1>
        </header>
    );
}
