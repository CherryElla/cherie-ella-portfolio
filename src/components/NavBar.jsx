import React from "react";
import './navbar.css'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentPage, handlePageChange }) {
    return (
        <ul class="nav nav-tabs flex flex-row space-x-7 h-0 fixed z-50">
            <li className="nav-item">
                <a id="home"
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={
                        currentPage === "Home" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a id="about"
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                        currentPage === "About" ? "nav-link active" : "nav-link"
                    }
                >
                    About
                </a>
            </li>
                <li className="nav-item">
                <a id="portfolio"
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={
                        currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                    }
                >
                    Portfolio
                </a>
            </li> 
            <li className="nav-item">
                <a id="blog"
                    href="#blog"
                    onClick={() => handlePageChange("Blog")}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                        currentPage === "Blog" ? "nav-link active" : "nav-link"
                    }
                >
                    Blog
                </a>
                </li>
            <li className="nav-item">
                <a id="contact"
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                        currentPage === "Contact"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default NavBar;
