import React from "react";
import Image from "next/image";
import {
  FaClosedCaptioning,
  FaCross,
  FaDoorClosed,
  FaPlay,
} from "react-icons/fa";
import Carousel from "../Carousel";
export default function Project({
  title = "project title",
  description = "some description goes here",
  techStack = ["nodejs", "react", "bootstrap"],
  link = "",
  image = "  https://images.unsplash.com/photo-1671850332276-40e3dec384ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  closeModal = () => {},
}) {
  return (
    <div className={` fixed top-0 w-[100vw] h-[100vh]  overflow-hidden`}>
      <div className={`w-[100vw] h-[100vh] bg-[#373434cf] overflow-hidden `}>
        <div className="w-[80%] bg-slate-900 m-auto mt-[100px]  p-6 text-slate-400 rounded">
          <div className=" p-2 border-b-amber-700">
            <h2 className="uppercase font-thin">{title}</h2>
          </div>
          <div className="flex flex-wrap p-3 lg:p-6 text-slate-400">
            <div className="flex-grow w-[full] md:w-[60%] p-3 lg:p-6 ">
              <div>
                <img
                  src={image}
                  alt="carousel"
                  className=" max-w-[600px]  mt-4 rounded"
                />
              </div>
              <h3 className="capitalize">Description</h3>
              <p className=" text-justify">{description}</p>
            </div>
            <div className="  w-[full] md:w-[30%] border-l border-yellow-600 p-3">
              <div>
                <h3 className="capitalize">Tech Stack</h3>
              </div>

              <div className="flex gap-2 mt-2">
                {techStack.map((x: any) => {
                  if (x == "nodejs") {
                    return (
                      <div key={Math.random()}>
                        <img src="./node.png" style={{ height: "36px" }} />
                      </div>
                    );
                  } else if (x == "react") {
                    return (
                      <div key={Math.random()}>
                        <img src="./react.png" style={{ height: "36px" }} />
                      </div>
                    );
                  } else if (x == "bootstrap") {
                    return (
                      <div key={Math.random()}>
                        <img src="./bootstrap.png" style={{ height: "36px" }} />
                      </div>
                    );
                  } else if (x == "expressjs") {
                    return (
                      <div key={Math.random()}>
                        <img src="./expressjs.png" style={{ height: "36px" }} />
                      </div>
                    );
                  } else if (x == "typescript") {
                    return (
                      <div key={Math.random()}>
                        <img
                          src="./typescript.svg"
                          style={{ height: "36px" }}
                        />
                      </div>
                    );
                  } else if (x == "keycloak") {
                    return (
                      <div key={Math.random()}>
                        <img src="./keycloak.svg" style={{ height: "36px" }} />
                      </div>
                    );
                  } else if (x == "docker") {
                    return (
                      <div key={Math.random()}>
                        <img src="./docker.svg" style={{ height: "36px" }} />
                      </div>
                    );
                  }
                  return <li key={Math.random()}>{x}</li>;
                })}
              </div>

              <div className="mt-4">
                <a href={link}>
                  <button className="flex gap-2 px-3 py-2 text-orange-100  bg-orange-900 hover:bg-orange-700 transition ease-in rounded">
                    <span className="relative top-1">
                      <FaPlay />
                    </span>{" "}
                    Live Course Link
                  </button>
                </a>
                <button
                  onClick={() => closeModal()}
                  className=" mt-4 flex gap-2 px-3 py-2 text-orange-100  bg-orange-900 hover:bg-orange-700 transition ease-in rounded"
                >
                  <span className="relative top-1">
                    <FaDoorClosed />
                  </span>{" "}
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
