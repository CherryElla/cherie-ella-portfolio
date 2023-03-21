import { React, useEffect, useState } from "react";

export default function Header() {
    useEffect(() => {
        function scrollEffect(e) {
            let { scrollY } = window;
            let nameText = document.getElementById("nameText");
            let clouds1 = document.getElementById("clouds1");
            let moon = document.getElementById("moon");
            let clouds2 = document.getElementById("clouds2");
            let trees = document.getElementById("trees");

            nameText.style.top = 450 + -0.5 * scrollY + "px";
            clouds1.style.top = 125 + -1.25 * scrollY + "px";
            // moon.style.left = 1.1 * scrollY + "px";
            clouds2.style.top = 125 + -1.25 * scrollY + "px";
            moon.style.top = 150 + -1.5 * scrollY + "px";
            trees.style.top = 200 + -1 * scrollY + "px";
        }
        window.addEventListener("scroll", scrollEffect);
        return () => {
            window.removeEventListener("scroll", scrollEffect);
        };
    }, []);

    return (
        <div className="relative w-screen h-screen flex items-center justify-center">
            <h1
                id="nameText"
                className=" absolute left-55  h-screen object-cover pointer-events-none -z-20 text-gray-200 text-8xl "
            >
                Cherie Ella
            </h1>

            <img
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-40"
                src="./src/images/moon.png"
                alt="orange moon"
                id="moon"
            />

            <img
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-30"
                src="./src/images/cloud-layer-1.png"
                alt="clouds"
                id="clouds1"
            />

            <img
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-30"
                src="./src/images/cloud-layer-2.png"
                alt="clouds"
                id="clouds2"
            />
            <img
                id="trees"
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-20"
                src="./src/images/tree-layer.png"
                alt="divider"
            />
        </div>
    );
}
