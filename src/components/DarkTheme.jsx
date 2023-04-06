import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function DarkTheme() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
    <div className="absolute right-0 m-2 z-50">
        <button
            className="dark:bg-cyan-800 bg-yellow-300 shadow drop-shadow-lg dark:text-yellow-400 text-blue-900 p-3 mt-1 rounded-3xl float-right"
            onClick={handleTheme}
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    </div>
    );
    
}
