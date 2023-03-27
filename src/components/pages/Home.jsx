import React from "react";
import Header from "../Header";
import About from "./About";
import Blog from "./Blog";
import NavBar from "../NavBar";
import Portfolio from "./Portfolio";
import ContactUs from "./Contact";

export default function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <div className="bg-slate-900 pb-10">
                <section className="">
                    <About />
                </section>
                <section className="pt-20">
                    <Portfolio />
                </section>
                <section className="pt-20">
                    <Blog />
                </section>
                <section className="pt-20">
                    <ContactUs/>
                </section>
            </div>
        </>
    );
}
