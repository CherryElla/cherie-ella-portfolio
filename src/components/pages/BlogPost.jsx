import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function BlogPost() {
    return (
        <>
        <div className="pb-40">
            <Link
                to="/"
                className=" p-5 m-5 hover:text-orange-500 shadow-2xl hover:shadow-orange-400 [writing-mode:vertical-lr] rounded-full w-20 h-20 "
            >
                <small className=" align-middle">Home</small>
            </Link>
            <h1 className="text-gray-300 text-5xl text-center">
                Moonlander Split Keyboard
            </h1>
            <div className="flex flex-wrap h-100 px-20 justify-center">
                <p className=" text-gray-300 text-2xl mt-10">
                    After hours of computer time, cramping and carpel tunnel, it
                    finally occurred to me that my average wireless keyboard
                    needed to come to an end. And for all the unnecessary pain,
                    the present to myself was this beautiful, well-made,
                    ergonomic and ortho-linear keyboard. The Moonlander has a
                    life-changing columnar layout, adjustable positioning, plus
                    an edgy aesthetic. It's a coder's dream.
                    <br />
                    <br />
                    What I love most about this keyboard is it's across the
                    board customization. Here are the key features:
                    <br />
                    <br />
                    1. Split - The keyboard is split right down the middle with
                    a long cable allowing the user to spread the keyboards out
                    apart, typing shoulder width apart for optimal positioning.
                    <br />
                    <br />
                    2. Hinges - Thumb pads and wrist rests are hinged so the
                    user can adjust the keyboards to lie in flat, domed, or
                    angled positions. This also allows compact transport since
                    they are foldable. Win.
                    <br />
                    <br />
                    3. Key-caps - As with most mechanical keyboards nowadays the
                    key-caps and switches are changeable. I opted for the yellow
                    switch set which has a fantastic silent and semi-firm touch.
                    If you're awesome enough, the Moonlander offers blank
                    key-caps.
                    <br />
                    <br />
                    4 Lights - Like something out of the movie 'Tron', it's
                    under-key LED's are programmable, perfect for active key,
                    current layer or animated lighting.
                    <br />
                    <br />5 Layers - Lastly, and one of my favorite parts to
                    this extraordinary hardware. It has three programmable
                    layers to switch between. My keyboard is now set up for
                    coding, gaming and general play with a quick key-press.
                </p>
            </div>
            <div className="pt-10">
                <a
                    className="text-gray-300 p-20"
                    href="https://www.zsa.io/moonlander/"
                >
                    https://www.zsa.io/moonlander/
                </a>
            </div>
        </div>
                    <Footer/>
                    </>
    );
}
