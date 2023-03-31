import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

export default function BlogPost() {
    return (
        <>
            <div className="sm:flex sm:flex-row z-20 text-l sm:gap-5 sm:bg-transparent bg-slate-900 text-center space-x-4  w-screen mt-12 sm:ml-5">
                <Link
                    to="/"
                    className="sm:pt-6 sm:bg-slate-900 text-orange-500 shadow-2xl shadow-orange-400 hover:shadow-sunlit  sm:rounded-full w-20 h-20 "
                >
                    Home
                </Link>
            </div>
            <div className="sm:pb-32 text-center sm:text-left pt-40">
                <h2 className="text-gray-300 text-5xl mb-10 text-center">
                    Moonlander
                </h2>
                <div className="flex flex-col sm:px-20 justify-center text-center sm:text-left px-14">
                    <div className=" text-gray-300 text-2xl mt-10">
                        <p>
                            After hours of computer time, cramping and carpel
                            tunnel, it finally occurred to me that my average
                            wireless keyboard needed to come to an end. And for
                            all the unnecessary pain, the present to myself was
                            this beautiful, well-made, ergonomic and
                            ortho-linear keyboard. The Moonlander has a
                            life-changing columnar layout, adjustable
                            positioning, plus an edgy aesthetic. It's a coder's
                            dream.
                        </p>
                        <p>
                            What I love most about this keyboard is it's across
                            the board customization. Here are the key features:
                        </p>
                        <p>
                            1. Split - The keyboard is split right down the
                            middle with a long cable allowing the user to spread
                            the keyboards out apart, typing shoulder width apart
                            for optimal positioning.
                        </p>
                        <p>
                            2. Hinges - Thumb pads and wrist rests are hinged so
                            the user can adjust the keyboards to lie in flat,
                            domed, or angled positions. This also allows compact
                            transport since they are foldable. Win.
                        </p>
                        <p>
                            3. Key-caps - As with most mechanical keyboards
                            nowadays the key-caps and switches are changeable. I
                            opted for the yellow switch set which has a
                            fantastic silent and semi-firm touch. If you're
                            awesome enough, the Moonlander offers blank
                            key-caps.
                        </p>
                        <p>
                            4. Lights - Like something out of the movie 'Tron',
                            it's under-key LED's are programmable, perfect for
                            active key, current layer or animated lighting.
                        </p>
                        <p>
                            5. Layers - Lastly, and one of my favorite parts to
                            this extraordinary hardware. It has unlimited
                            programmable layers to switch between. My keyboard
                            is now set up for coding, gaming and general play
                            with a quick key-press.
                        </p>
                    </div>
                </div>
                <div className="my-10">
                    <a
                        className="text-gray-300 p-20"
                        href="https://www.zsa.io/moonlander/"
                    >
                        https://www.zsa.io/moonlander/
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}
