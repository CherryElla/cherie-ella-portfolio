import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header class="flex w-screen h-auto ">
            <div class="headerBg w-screen h-auto z-10">
                <img
                    class="w-screen "
                    src="./src/images/tr-pink-moon.png"
                    alt=""
                />
            </div>
            <div class=" absolute w-screen h-auto z-10">
                <img class="w-screen " src="./src/images/cloud.png" alt="" />
            </div>
            <div class=" absolute w-screen h-auto z-10">
                <img
                    class="w-screen"
                    src="./src/images/skyline-layer.png"
                    alt=""
                />
            </div>
            <div class=" absolute w-screen h-auto z-10">
                <img
                    class="w-screen"
                    src="./src/images/new-section.png"
                    alt=""
                />
            </div>
        </header>
    );
}
