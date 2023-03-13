import React from 'react';

export default function Portfolio() {
  return (
    <div class="flex m-9 p-9 grid-cols-3 gap-4 text-purple-800">
      <div class="">
        <img class="h-80 w-100 object-contain" src="./src/images/little-tech-blog.png" alt="" />
        <p>The Little Tech Blog</p>
          </div>
      <div class="">
        <img class="h-80 w-100 object-scale-down" src="./src/images/mate.png" alt="" />
        <p>My Awesome Text Editor</p></div>
      <div class="">
        <img class="h-80 w-100 object-contain" src="./src/images/old-comp.png" alt="" />
        <p>Coming Soon</p></div>

    </div>
  );
}