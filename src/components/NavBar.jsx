import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Navbar Component function
function NavBar() {
    return (
        <div className="sm:flex sm:flex-row fixed z-20 text-l sm:gap-5 sm:bg-transparent bg-slate-900 text-center space-x-4  w-screen mt-12 sm:ml-5">
            <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="sm:pt-6 sm:bg-slate-900 text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit  sm:rounded-full w-20 h-20 "
            >
                Home
            </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="sm:pt-6 sm:bg-slate-900 text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit sm:rounded-full w-20 h-20"
            >
                About
            </Link>
            <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="sm:pt-6 sm:bg-slate-900 text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit sm:rounded-full w-20 h-20"
            >
                Portfolio
            </Link>

            <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="sm:pt-6 sm:bg-slate-900 text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit sm:rounded-full w-20 h-20"
            >
                Blog
            </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="sm:pt-6 sm:bg-slate-900 text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit sm:rounded-full w-20 h-20"
            >
                Contact
            </Link>
        </div>
    );
}

export default NavBar;
