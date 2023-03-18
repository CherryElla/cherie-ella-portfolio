import React from "react";
import Header from "../Header";
import About from "./About";
import Projects from "../Projects";
import Blog from "./Blog";

export default function Home() {
    return (
        <>
            <Header />
            <img className="" src="./src/images/section.png" alt="divider" />
            <div className="bg-slate-900 ">
                <section className="m-0 p-0  bg-slate-900 ">
                    <About />
                </section>
                <section className="bg-slate-900 pt-20">
                    <h2 className="text-center text-5xl text-gray-300">
                        Projects
                    </h2>
                    <Projects />
                </section>
                <section>
                    <Blog />
                </section>
            </div>
        </>
    );
}
