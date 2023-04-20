import React from "react";
import { Button, Link, animateScroll as scroll } from "react-scroll";

// Navbar Component function
function NavBar() {
    const buttons = [
        { to: "home", name: "Home" },
        { to: "about", name: "About" },
        { to: "portfolio", name: "Portfolio" },
        { to: "blog", name: "Blog" },
        { to: "contact", name: "Contact" },
    ];

    function NavButton({ to, name }) {
        return (
            <Link
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <span className="inline=block align-middle text-teal-800">
                    {name}
                </span>
            </Link>
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
