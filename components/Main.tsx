import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Navbar from "./Navbar";

const Main = () => {
  let backgroundImage ="park_main.png";
  return (
    <div className="w-full h-screen bg-black text-center flex">
      <div
        className="w-[100vw]  md:block overflow-hidden "
        style={{ background: `url(${backgroundImage})` }}
      >
        <div className="w-[100vw] h-[100vh] md:block bg-gradient-to-l from-black  to-[rgba(22,22,22,.5)] overflow-hidden ">
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-300 ">
                スキルと経験
              </p>
              <h1 className="py-4 text-sky-400 font-thin text-10xl">
                portfolio{" "}
                <span className="text-white">高橋秀夫</span>
              </h1>

              <p className="py-4 text-gray-400 w-[60%]  m-auto tracking-widest antialiased hover:subpixel-antialiased">
              C#、Java、Kotlin、Python、GoLang、Three.js、PHP、Perl、VBA、Ruby           
              </p>

              <div className="flex items-center justify-between max-w-[130px] m-auto py-4 text-white">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
