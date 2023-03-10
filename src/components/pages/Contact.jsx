import React from "react";

export default function Contact() {
    return (
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold text-9xl">CONTACT</h2>
            <p class="text-2xl">Have a question or want to collaborate?</p>
            <div class="mt-8 max-w-md">
                <div class="grid grid-cols-1 gap-6">
                    <label class="block custom-cursor-default-hover">
                        <span class="text-white">Name</span>
                        <input
                            type="text"
                            class="mt-1 block w-full rounded-md
                            bg-gray-900 border-transparent
                            focus:border-gray-500
                            focus:bg-gray-200 
                            focus:ring-0"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}
