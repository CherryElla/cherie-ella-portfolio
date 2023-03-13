import React from 'react';
import About from './About';

export default function Home() {
  return (
    <div class="flex flex-col w-screen h-auto justify-center items-center">
      <div class="z-0 relative w-8/12 h-auto">
        <img class="" src="./src/images/me-blue.png" alt="" />
      </div>
      <div class="">

      </div>
      <About />
    </div>
  );
}