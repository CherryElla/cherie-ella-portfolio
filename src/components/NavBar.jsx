import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Navbar Component function
function NavBar() {
    const buttons = [
        { to: "/", name: "Home" },
        { to: "about", name: "About" },
        { to: "portfolio", name: "Portfolio" },
        { to: "blog", name: "Blog" },
        { to: "contact", name: "Contact" },
    ];

    function NavButton({ to, name }) {
        return (
            <div
                key={to}
                className="sm:pt-6 sm:bg-slate-900 hover:text-slate-900 hover:bg-orange-400 text-orange-500 ring-1 ring-orange-400 shadow-md shadow-black  hover:shadow-sunlit  sm:rounded-full rounded sm:w-20 sm:h-20 "
            >
                <Link
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    // className="sm:pt-6 sm:bg-slate-900 hover:text-slate-900 hover:bg-orange-400 text-orange-500 shadow-2xl sm:shadow-orange-400 hover:shadow-sunlit  sm:rounded-full rounded sm:w-20 sm:h-20 "
                >
                    <span className="inline=block align-middle">{name}</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col fixed z-20 text-l gap-5 sm:bg-transparent text-center mt-5 sm:ml-5 pl-2 sm:pl-0">
            {buttons.map((button) => {
                return NavButton({ ...button });
            })}
        </div>
    );
}

export default NavBar;
