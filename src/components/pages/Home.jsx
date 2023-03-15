import React from "react";
import Header from "../Header";
import About from "./About";
import Portfolio from "./Portfolio";


export default function Home() {
    return (
        <div class="w-screen m-0">
            <Header />
            <section class="m-0 p-0 z-10 bg-slate-900">
                <About />
            </section>
            <section class="bg-slate-900 pt-20 z-10">
                <Portfolio />
            </section>
        </div>
    );
}
