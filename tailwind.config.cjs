/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            boxShadow: {
                neon: "0px 0px 30px 10px #0ff",
            },
            keyframes: {
                sky: {
                    "0%": "bg-left-top",
                    "100%": "bg-right-top",
                },
                animation: {
                    sky: "sky 50s linear infinite",
                },
                backgroundImage: {
                    gradient:
                        "linear-gradient(0deg,#cf5c5c,#c19b4a,#def2a0,#c6ee4a,#42eca6,#64b3d9,#208ea2,#498ada,#5b73df,#897ed3,#cf5c5c,#c19b4a)",
                },
            },
        },
        plugins: [
            require("@tailwindcss/forms"),
        ],
    },
};
