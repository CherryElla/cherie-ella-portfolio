import React from "react"
import './header.css'


export default function Header(){
    return (
<header>
<div class="flex w-screen h-auto">
<div class="headerBg w-screen h-auto z-10 ">
        <img
            class="w-screen"
            src="./src/images/tr-pink-moon.png"
            alt=""
        />
    </div>
    <div class=" absolute w-screen h-auto z-10">
        <img
            class="w-screen "
            src="./src/images/cloud.png"
            alt=""
        />
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
</div>
{/* <div class="flex absolute font-Rubik+Iso text-7xl rotate-90 left-28 top-12 ">
full stack 
</div>
<div class="flex absolute font-Rubik+Iso text-7xl rotate-90 left-0 bottom-30 z-0">
designer 
</div>
<div class="flex absolute font-Rubik+Iso text-7xl rotate-90 right-1 top-60 z-0">
web developer 
</div>
<div class="flex absolute font-Rubik+Iso text-7xl rotate-90 right-1 top-30 z-0">
coder
</div> */}
</header>
    );
}