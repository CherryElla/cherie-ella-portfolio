import React from "react";
import Header from "../Header";
import About from "./About";
import Blog from "./Blog";
import NavBar from "../NavBar";
import Portfolio from "./Portfolio";
import ContactUs from "./Contact";
import Footer from "../Footer";
import DarkTheme from "../DarkTheme";

export default function Home() {
    return (
        <>
            <NavBar />
            <DarkTheme />
            <Header />
            <div className="bg-slate-900 mb-10">
                <section id="about" className="">
                    <About />
                </section>
                <section className="mt-20">
                    <Portfolio />
                </section>
                <section className="mt-20">
                    <Blog />
                </section>
                <section className="mt-20">
                    <ContactUs />
                </section>
                <section className="mt-20">
                    <Footer />
                </section>
            </div>
        </>
    );
}
