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
                <Projects />
            </section>
        </div>
    );
}
// z-10 flex m-9 p-9 grid-cols-3 gap-4 text-purple-800 bg-slate-900