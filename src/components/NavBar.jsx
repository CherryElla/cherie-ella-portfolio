import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Navbar Component function
function NavBar() {
    return (
        <ul className="nav nav-tabs flex flex-col fixed z-50 p-5 pt-5 text-l gap-5 ">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className=" p-5 hover:text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit [writing-mode:vertical-lr] rounded-full w-20 h-20 "
                >
                    <small className=" align-middle">Home</small>
                </Link>
            <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="p-5 hover:text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className=" align-middle">About</small>
                </Link>
            <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="p-5 hover:text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className=" align-middle">Portfolio</small>
                </Link>

                <Link
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="p-5 hover:text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className=" align-middle">Blog</small>
                </Link>
            <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="p-5 hover:text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className="align-middle">Contact</small>
                </Link>
        </ul>
    );
}

export default NavBar;
