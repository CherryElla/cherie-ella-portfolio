import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Navbar Component function
function NavBar() {
    return (
        <div className="flex flex-col fixed z-20 text-l gap-5 sm:bg-transparent text-center mt-5 sm:ml-5 pl-2 sm:pl-0">
            <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="sm:pt-6 sm:bg-slate-900 hover:text-slate-900 hover:bg-orange-400 text-orange-500 shadow-2xl sm:shadow-orange-400 hover:shadow-sunlit  sm:rounded-full rounded sm:w-20 sm:h-20 "
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
                className="sm:pt-6 sm:bg-slate-900 hover:text-slate-900 hover:bg-orange-400 text-orange-500 shadow-2xl sm:shadow-orange-400 hover:shadow-sunlit  sm:rounded-full rounded sm:w-20 sm:h-20  "
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
                className="sm:pt-6 sm:bg-slate-900 hover:text-slate-900 hover:bg-orange-400 text-orange-500 shadow-2xl sm:shadow-orange-400 hover:shadow-sunlit  sm:rounded-full rounded sm:w-20 sm:h-20 "
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
                className="sm:pt-6 sm:bg-slate-900 hover:text-slate-900 hover:bg-orange-400 text-orange-500 shadow-2xl sm:shadow-orange-400 hover:shadow-sunlit  sm:rounded-full rounded sm:w-20 sm:h-20 "
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
                className="sm:pt-6 sm:bg-slate-900 hover:text-slate-900 hover:bg-orange-400 text-orange-500 shadow-2xl sm:shadow-orange-400 hover:shadow-sunlit  sm:rounded-full rounded sm:w-20 sm:h-20 "
            >
                Contact
            </Link>
        </div>
    );
}

export default NavBar;
