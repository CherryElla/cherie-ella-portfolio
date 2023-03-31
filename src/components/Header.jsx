import { React, useEffect, useState } from "react";

export default function Header() {
    useEffect(() => {
        function scrollEffect(e) {
            let { scrollY } = window;
            if (!scrollY) {
                scrollY = 0
            }
            let nameText = document.getElementById("nameText");
            // let clouds1 = document.getElementById("clouds1");
            let moon = document.getElementById("moon");
            let clouds2 = document.getElementById("clouds2");
            // let trees = document.getElementById("trees");

            nameText.style.top = 450 + -0.5 * scrollY + "px";
            // clouds1.style.top = 125 + -1.25 * scrollY + "px";
            clouds2.style.top = 125 + -0.5 * scrollY + "px";
            moon.style.top = 150 + -1.5 * scrollY + "px";
            // trees.style.top = 200 + -1 * scrollY + "px";
        }
        scrollEffect()
        window.addEventListener("scroll", scrollEffect);
        return () => {
            window.removeEventListener("scroll", scrollEffect);
        };
    }, []);

    return (
        <div id="home" className="relative w-screen h-screen flex items-center justify-center">
            <h1
                id="nameText"
                className=" absolute left-55  h-screen object-cover pointer-events-none -z-20 text-gray-200 text-8xl "
            >
                Hello..
            </h1>

            <img
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-40"
                src="/images/moon.png"
                alt="orange moon"
                id="moon"
            />

            <img
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-30"
                src="/images/cloud-layer-base.png"
                alt="clouds"
                id="clouds2"
            />
                        {/* <img
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-30"
                src="/images/cloud-layer-top.png"
                alt="clouds"
                id="clouds1"
            /> */}
            <img
                id="clouds1"
                className="w-screen absolute left-0 top-0 h-screen object-cover pointer-events-none -z-20"
                src="/images/cloud-layer-cover.png"
                alt="divider"
            />
        </div>
    );
}
