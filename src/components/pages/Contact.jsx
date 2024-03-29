import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_rzypq2z",
                "template_z6d4q9d",
                form.current,
                "gXkhtTUPc_Vt_A8oj"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
        <h2 className="text-center sm:mt-32  text-gray-300 text-5xl">Contact</h2>
        <p className="text-center p-14 text-teal-300">Have any questions or would like to collaborate?</p>
        <form
            id="contact"
            className=" grid place-items-center mb-20"
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            target="_blank">
            <div className="mb-3 w-1/2">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    className="px-3 py-3 shadow-neon placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0  outline-none focus:outline-none focus: ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0 w-1/2">
                <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    className="px-3 py-3 shadow-neon placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0  outline-none focus:outline-none focus: ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0 w-1/2">
                <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 shadow-neon placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0  outline-none focus:outline-none focus: ring w-full"
                    required
                />
            </div>
            <div className="mb-5 pt-0">
                <button className="bg-teal-300 hover:shadow-neon mt-10 to-slate-900  active:bg-neutral-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Send Message
                </button>
            </div>
        </form>
        </>
    );
};
export default ContactUs;
