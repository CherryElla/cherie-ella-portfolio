import React from "react";
import Header from "../Header";
import About from "./About";
import Projects from "../Projects";

export default function Home() {
    return (
        <div class="w-screen m-0 h-auto ">
            <section class="">
                <Header />
            </section>
            <section class="m-0 p-0 z-10 bg-slate-900 ">
                <About />
            </section>
            <section class="bg-slate-900 pt-20 z-10 ">
                <h2 class="text-center text-5xl text-gray-300">Projects</h2>
                <Projects />
            </section>
        </div>
    );
}
