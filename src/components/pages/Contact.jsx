import React from "react";

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col justify-center items-center pt-20">
            <h2 className="text-5xl text-gray-300">CONTACT</h2>
            <p className="text-2xl text-gray-300 pt-10">
                Have a question or want to collaborate?
            </p>
            {/* Form html below */}
            <form className="pt-10">
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                        Name
                    </span>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    <span className="block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                        placeholder="you@example.com"
                    ></input>
                    <span className="block text-sm font-medium text-slate-700">
                        Message
                    </span>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    />
                </label>
            </form>
        </div>
    );
}
