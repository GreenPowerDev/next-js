import React from "react";
import {
  FaChevronCircleRight,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaCogs,
  FaDollarSign,
  FaInternetExplorer,
  FaLock,
  FaPager,
  FaSnapchat,
} from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiDocker,
  SiFigma,
  SiHiveBlockchain,
  SiJavascript,
} from "react-icons/si";

export default function Offers() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-[90vw] m-auto">
        <div className="md:p-8 grid sm:grid-cols-1 md:grid-cols-3 sm:gap-[10px] md:gap-[40px]">
          <div className="my-4">
            <div className=" p-6 h-[70vh] bg-orange-700 shadow-lg rounded flex flex-col  transition ease-linear">
              <div className="">
                <h1 className="text-orange-100 font">
                  Get <br /> Begineer
                </h1>
              </div>
              <div className="mt-3">
                <p className="text-orange-200">Take your passion online</p>
              </div>
              <div className="mt-6 flex-grow ">
                <div className="text-sm flex flex-col justify-between h-full  text-orange-300">
                  <li className="flex gap-2">
                    <FaDollarSign size={24} /> 50 | Pocket Friendly
                  </li>
                  <li className="flex gap-2">
                    <FaInternetExplorer size={24} /> Domain Configuration
                  </li>
                  <li className="flex gap-2">
                    <SiBlockchaindotcom size={24} /> Choose a Framework
                  </li>
                  <li className="flex gap-2">
                    <FaCode size={24} /> Customize and Build
                  </li>
                  <li className="flex gap-2">
                    <FaPager size={24} /> Upto 3 Pages
                  </li>
                </div>
              </div>
              <div className="p-6">
                <button className="  flex  justify-center px-2 py-2 w-full rounded  font-thin uppercase text-orange-500 shadow hover:bg-orange-300 transition ease-in-out">
                  Get Started &nbsp; <FaChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="my-4">
            {" "}
            <div className="my-auto">
              <div className=" p-6 h-[70vh] bg-green-800 shadow-lg rounded flex flex-col ">
                <div className="">
                  <h1 className="text-green-100 font">
                    Set <br /> Started
                  </h1>
                </div>
                <div className="mt-3">
                  <p className="text-green-200">Catching up with the pace</p>
                </div>
                <div className="mt-6 flex-grow ">
                  <div className="text-sm flex flex-col justify-between h-full  text-green-300">
                    <li className="flex gap-2">
                      <FaDollarSign size={24} /> 150 - 200 | We need Power
                    </li>
                    <li className="flex gap-2">
                      <FaChevronLeft size={24} /> Everything From Get
                    </li>
                    <li className="flex gap-2">
                      <FaLock size={24} /> Login | Signup
                    </li>
                    <li className="flex gap-2">
                      <FaCogs size={24} /> Admin Pannel
                    </li>
                    <li className="flex gap-2">
                      <FaPager size={24} /> Upto 8 Pages
                    </li>
                  </div>
                </div>
                <div className="p-6">
                  <button className="  flex  justify-center px-2 py-2 w-full rounded  font-thin uppercase text-green-500 shadow hover:bg-green-300 transition ease-in-out">
                    Get Started &nbsp; <FaChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="">
              {" "}
              <div className="my-auto">
                <div className=" p-6 h-[70vh] bg-slate-800 shadow-lg rounded flex flex-col ">
                  <div className="">
                    <h1 className="text-slate-100 font">
                      Go <br /> Pro.
                    </h1>
                  </div>
                  <div className="mt-3">
                    <p className="text-slate-200">Catching up with the pace</p>
                  </div>
                  <div className="mt-6 flex-grow ">
                    <div className="text-sm flex flex-col justify-between h-full  text-slate-300">
                      <li className="flex gap-2">
                        <FaDollarSign size={24} /> Custom | $ 15 Hourly
                      </li>
                      <li className="flex gap-2">
                        <FaChevronLeft size={24} /> Everything From Set
                      </li>
                      <li className="flex gap-2">
                        <SiDocker size={24} /> Cloud Hosting | Managment
                      </li>
                      <li className="flex gap-2">
                        <FaSnapchat size={24} /> Personalized Support
                      </li>
                      <li className="flex gap-2">
                        <SiFigma size={24} /> Figma UI UX - Web
                      </li>
                    </div>
                  </div>
                  <div className="p-6">
                    <button className="  flex  justify-center px-2 py-2 w-full rounded  font-thin uppercase text-slate-500 shadow hover:bg-slate-300 transition ease-in-out">
                      Get Started &nbsp; <FaChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
