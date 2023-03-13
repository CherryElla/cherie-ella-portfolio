import React from 'react';
import About from './About';
import Portfolio from './Portfolio';

export default function Home() {
  return (
    <div class="flex flex-col w-screen h-auto justify-center items-center">
      <div class="z-0 relative w-8/12 h-auto">
        <img class="" src="./src/images/me-blue.png" alt="" />
      </div>
      <div class="flex absolute font-Rubik+Iso text-7xl">
        HELLO
      </div>
      <div class="">
        <About />
      </div>
      <Portfolio />

    </div>
  );
}