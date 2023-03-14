import React from 'react';
import About from './About';
import Portfolio from './Portfolio';

export default function Home() {
  return (
    <div class="flex flex-col w-screen h-auto justify-center items-center">
      <div class=" relative w-8/12 h-auto z-10">
        <img class="" src="./src/images/me-blue.png" alt="" />
      </div>
      <div class="flex absolute font-Rubik+Iso text-7xl rotate-90 left-28 top-12">
        full stack 
      </div>
      <div class="flex absolute font-Rubik+Iso text-7xl rotate-90 left-0 bottom-30 z-0">
        designer 
      </div>
      <div class="flex absolute font-Rubik+Iso text-7xl rotate-90 right-1 top-80 z-0">
        web developer 
      </div>
      <div class="flex absolute font-Rubik+Iso text-7xl rotate-90 right-1 top-30 z-0">
         coder
      </div>
      <div class="m-0 p-0 bg-teal-200 z-10">
        <About />
      </div>
      <Portfolio />

    </div>
  );
}