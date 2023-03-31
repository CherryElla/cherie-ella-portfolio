import React from "react";
import Links from "./Links";
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className=" text-orange-500 px-10 gap-5 flex flex-col">
            <Links />
            <div className="text-center">{`Copyright © Cherie Ella Viens ${year}`}</div>
        </footer>
    );
}
