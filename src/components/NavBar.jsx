import React from "react";


// Navbar Component function
function NavBar() {
    return (
        <ul className="nav nav-tabs flex flex-col fixed z-50 p-5 pt-5 text-l gap-5 ">
            <li className="nav-item ">
                <a
                    href="#"
                    className=" p-5 hover:text-orange-500 shadow-xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20 "
                    // onClick={(e) => {
                    //     let home = document.getElementById("home");
                    //     e.preventDefault(); // Stop Page Reloading
                    //     home && home.scrollIntoView();
                    // }}
                >
                    Home
                </a>
            </li>
            <li className="nav-item ">
                <a

                    href="#about"
                    className="p-5 hover:text-orange-500 shadow-xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                    // onClick={(e) => {
                    //     let about = document.getElementById("about");
                    //     e.preventDefault(); 
                    //     about && about.scrollIntoView();
                    // }}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    className="p-5 hover:text-orange-500 shadow-xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                    // onClick={(e) => {
                    //     let portfolio = document.getElementById("portfolio");
                    //     e.preventDefault();
                    //     portfolio && portfolio.scrollIntoView();
                    // }}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#blog"
                    className="p-5 hover:text-orange-500 shadow-xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                    // onClick={(e) => {
                    //     let blog = document.getElementById("blog");
                    //     e.preventDefault();
                    //     Blog && Blog.scrollIntoView();
                    // }}
                >
                    Blog
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    className="p-5 hover:text-orange-500 shadow-xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20"
                    // onClick={(e) => {
                    //     let contact = document.getElementById("contact");
                    //     e.preventDefault();
                    //     contact && contact.scrollIntoView();
                    // }}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default NavBar;
