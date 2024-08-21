import React, { useRef } from "react";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import emailjs from "@emailjs/browser";
const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f5imlyj", "template_hfkia9w", form.current, {
        publicKey: "xUL0ziIpBHKHkl4iC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      className=" relative bg-white w-full  max-w-4xl p-8 z-[8] flex flex—col space-y-6 rounded-xl 
    text—white"
    >
      <div
        className="bg-cyan-700 border-cyan-950 border-2 z-[9] absolute left-0 top-0  p-10 backdrop-blur-3xl w-full h-full   flex flex—col rounded-xl 
    text—white"
      ></div>
      <div className="flex flex-col lg:flex-row h-full  lg:space-x-6 lg:space-y-0 z-[10] space-y-6 justify-around">
        <div className="lg:w-2/5 w-full">
          <div className="font-eng1">
            <h1 className="text-white font-eng2 font-bold text-4xl  tracking-wide">
              Contact Us
            </h1>
            <p
              className="py-2
 text-cyan-200 text-sm"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A et
              consequuntur sit blanditiis, dolor inventore fugit voluptas?
              Temporibus vero, nulla deserunt sed necessitatibus aliquam vitae
              provident sapiente aut nam velit.
            </p>
          </div>
          <div className="flex flex-col space-y-4 mt-5">
            <div className=" inline-flex space-x-2 items-center">
              <IoCall className="text-teal-300 text-xl" />
              <span className="text-white">(+49) 176 8458 2707</span>
            </div>
            <div className=" inline-flex space-x-2 items-center">
              <IoMailSharp className="text-teal-300 text-xl h-auto w-auto" />
              <span className="text-white">farshad27bagheri07@gmail.com</span>
            </div>
            <div className=" inline-flex space-x-2 items-center">
              <IoLocation className="text-teal-300 text-xl" />
              <span className="text-white">08056 Zwickau , Germany</span>
            </div>
            <div className="flex space-x-4 mt-6 text-white text-lg">
              <IoLogoFacebook />
              <IoLogoTwitter />
              <IoLogoLinkedin />
              <IoLogoInstagram />
            </div>
          </div>
        </div>
        <div className="bg-white  w-auto rounded-xl shadow-lg p-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="flex flex-col text-sm font-eng2 space-y-4 text-gray-700"
          >
            <div className="flex flex-col md:flex-row md:space-x-2 items-center justify-between ">
              <div className="w-full md:pb-0 pb-4">
                <label htmlFor="" className="font-semibold ml-2">
                  Name :
                </label>
                <input
                  name="user_name"
                  type="text"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4  py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="font-semibold ml-2 ">
                  Email Address :
                </label>
                <input
                  name="user_email"
                  type="text"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="font-semibold ml-2">
                Comment :
              </label>
              <textarea
                name="message"
                type="text"
                rows="4"
                className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Write your comment ..."
              />
            </div>
            <div className="flex items-center justify-start w-full   ">
              <button
                value="Send"
                type="submit"
                //   disabled={!formik.isValid ? true : false}
                className="btn a  disabled:bg-slate-500 tracking-wide bg-cyan-700 font-eng2 font-light text-sm py-3 px-6 rounded-xl active:bg-slate-700 text-purple-900 uppercase"
              >
                {false ? <PulseLoader color="#fff" size={5} /> : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
