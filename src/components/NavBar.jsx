import React from "react";


// Navbar Component function
function NavBar() {
    return (
        <ul className="nav nav-tabs flex flex-col fixed z-50 p-5 pt-5 text-l gap-5 ">
            <li className="nav-item ">
                <a
                    href="#"
                    className=" p-5 hover:text-orange-500 shadow-2xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20 "
                >
                    <small className=" align-middle">Home</small>
                </a>
            </li>
            <li className="nav-item ">
                <a

                    href="#about"
                    className="p-5 hover:text-orange-500 shadow-2xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className=" align-middle">About</small>
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    className="p-5 hover:text-orange-500 shadow-2xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className=" align-middle">Portfolio</small>
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#blog"
                    className="p-5 hover:text-orange-500 shadow-2xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className=" align-middle">Blog</small>
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    className="p-5 hover:text-orange-500 shadow-2xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                >
                    <small className="align-middle">Contact</small>
                </a>
            </li>
        </ul>
    );
}

export default NavBar;
