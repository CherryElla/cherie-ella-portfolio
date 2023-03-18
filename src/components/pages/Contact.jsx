import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-9xl">CONTACT</h2>
            <p className="text-2xl text-gray-300">Have a question or want to collaborate?</p>
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                    <label className="block custom-cursor-default-hover">
                        <span className="text-white">Name</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md
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
