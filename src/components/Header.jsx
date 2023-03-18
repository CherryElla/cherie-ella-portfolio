import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header>
            <img
                className="parallax-item translate-z-4 -z-50"
                src="./src/images/orange-moon.png"
                alt="orange moon"
            />
            <img
                className="parallax-item translate-z-3 -z-40"
                src="./src/images/cloud-layer-1.png"
                alt="clouds"
            />
            <img
                className="parallax-item translate-z-3 -z-40"
                src="./src/images/cloud-layer-2.png"
                alt="clouds"
            />
            <img
                className="parallax-item translate-z-1 -z-30"
                src="./src/images/skyline-layer.png"
                alt="futuristic skyline"
            />
            {/* <img
                className="parallax-item translate-z-0 -z-20"
                src="./src/images/new-section.png"
                alt="divider"
            /> */}
            {/* <h1>
                Yo
            </h1> */}
        </header>
    );
}
