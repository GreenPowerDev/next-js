import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Carousel.module.css";
import { ProjectModal } from ".";
import { ProjectInterface } from "../interface/project";
import {
  FaCode,
  FaDatabase,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaSchool,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiDocker,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiSwift,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { techStack } from "../data/techStack";
import Tech from "./micro/Tech";
export default function Projects() {
  const [showModal, setshowModal] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
    }
  }, []);
  const data: ProjectInterface[] = [
    {
      title: "デザインとデザインコーディングの経験",
      description:
        " 長年デザインコーディングの経験を持っており、5000pxコーディングも一瞬でできる。いつでもデザインの個数をすぐに進めることができる。",
      thumb:
        "samurai.png",
      projectImage:
        "stro_design2.png",
      techStack: ["react", "nodejs", "redux"],
      projectUrl: "https://k-s-f.com/",
      duration: "Nov 2020 - Dec 2020",
    },
    {
      title: "5年以上のフリーランスのキャリアを持つエンジヤ ",
      description:
        "IT分野の多様な業種で様々な言語と技術を組み合わせて、依頼者の要求を最上の水門で満足させる。",
      thumb:
        "fav1.png",
      projectImage:
        "ecshop3.png",
      techStack: ["react", "typescript", "nodejs", "docker", "keycloak"],
      projectUrl: "https://tableware.noritake.co.jp/feature/details/000420.html",
      duration: "Aug 2021",
    },
    {
      title: "3Dアニメーションの実現",
      description:
        " NginxとThree.jsを利用して簡単な同化効果を追加したスタイリッシュなホームページを作成しました。",
      thumb:
        "samurai.png",
      projectImage:
        "three_nginx.png",
      techStack: ["react", "nodejs", "docker", "keycloak"],
      projectUrl: "https://www.natoco.co.jp/",
      duration: "Sep 2021 - Nov 2021",
    },
    // {
    //   title: "Connect2India | Website ",
    //   description:
    //     "Used React and Redux to make the entire form builder. Redux was used to manage the whole state of the forms. Created a form to share with people and collect responses which are the same as Google forms.",
    //   thumb:
    //     "https://visualpharm.com/assets/720/Github-595b40b65ba036ed117d442f.svg",
    //   projectImage:
    //     "https://res.cloudinary.com/dxir7knlo/image/upload/v1673347261/music_eomk2i.png",
    //   techStack: ["react", "nodejs", "expressjs"],
    //   projectUrl: "https://github.com/ashishsah1000/rapidmusicplayer",
    //   duration: "Dec 2021 - Jan 2022",
    // },
  ];

  const [modalData, setModalData] = useState({ ...data[0] });
  const handleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <div className={``}>
      {showModal ? (
        <ProjectModal
          title={modalData.title}
          description={modalData.description}
          techStack={modalData.techStack}
          link={modalData.projectUrl}
          image={modalData.projectImage}
          closeModal={handleModal}
        />
      ) : (
        <></>
      )}
      <div className={`w-full `}>
        <div className="w-[80%] m-auto mt-[40px] md:mt-[-100px]">
          <div className="grid mb-8  md:mb-12 md:grid-cols-3 ">
            {data != undefined ? (
              data.map((x) => {
                return (
                  <div
                    className="flex flex-col bg-white  m-3 rounded shadow-md"
                    key={Math.random()}
                  >
                    <div className="flex  justify-center">
                      <img
                        className="rounded-full w-[120px] h-[120px] mt-6"
                        src={x.thumb}
                        alt="profile picture"
                      />
                    </div>
                    <div className="flex ">
                      <div
                        onClick={() => {
                          handleModal();
                          setModalData({ ...x });
                        }}
                        className="flex cursor-pointer flex-col justify-start p-8   "
                      >
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                          <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-orange-300">
                            {x.title}
                          </h3>
                          <p className="my-4 text-center font-light text-sm">
                            {x.description}
                          </p>
                        </blockquote>
                        {/* <figcaption className="flex text-center justify-center space-x-3">
                          <img
                            className="rounded-full w-9 h-9"
                            src={x.thumb}
                            alt="profile picture"
                          />
                          <div className="space-y-0.5 font-medium dark:text-slate-400 text-left">
                            <div>
                              <a href={`${x.projectUrl}`}>Project Link</a>
                            </div>
                            <div className="text-sm font-light  text-gray-500 dark:text-gray-400">
                              {x.duration}
                            </div>
                          </div>
                        </figcaption> */}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex justify-center p-6 h-[50vh] md:h-[100vh]">
          <div className="flex flex-col justify-center hidden md:block w-[30vw]">
            <div className="m-auto  h-full flex align-middle justify-center">
              <div className="p-6 mt-10 h-[70vh]">
                <div>
                  <img
                    className="rounded w-[256px]"
                    src="my_port.png"
                  />
                </div>
                <div className="my-6">
                  <h3 className="text-slate-700 font-bold text-xl">
                   宮口 稲次郎
                  </h3>
                </div>
                <div className="border-l border-green-800 p-6">
                  <ul className="text-green-900 font-thin text-sm flex flex-col gap-2">
                    <li className="flex gap-2 ">
                      <FaSchool size={16} />エンジニアの業務経験
                    </li>
                    <li className="flex gap-2 ">
                      <FaGithub size={16} /> 豊富なデザイン体験
                    </li>
                    <li className="flex gap-2 ">
                      <FaCode size={16} style={{ marginTop: "1px" }} /> Full
                      Stack 開発者
                    </li>
                  </ul>
                </div>
              </div>

              {/* <h1 className="text-center m-auto text-slate-800  ">
                <FaGithub size={256} />
              </h1> */}
            </div>
            <div>
              {/* <button className="py-3 px-3  rounded  bg-slate-600 text-slate-200 hover:bg-slate-700 hover:text-slate-200 transition ease-in-out flex gap-2">
                <span className="relative ">
                  <FaGithub size={24} />
                </span>{" "}
                A lot to explore on GitHub
              </button> */}
            </div>
          </div>
          <div className="w-[70vw]">
            {/* <h1 className="font-thin mt-8 text-slate-700">
              With great power comes great responsiblity
            </h1> */}
            <div className="text-slate-600 grid grid-cols-3 h-full ">
              <div className="flex m-4 ">
                <div>
                  <FaGitAlt size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> GIT</h3>
                  <p className="font-thin text-sm">Version Control</p>
                </div>
              </div>
              {/* node js */}
              <div className="flex m-4 ">
                <div>
                  <FaNodeJs size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> Node JS</h3>
                  <p className="font-thin text-sm">Backend Development</p>
                </div>
              </div>
              {/* React for frontend */}
              <div className="flex m-4 ">
                <div>
                  <FaReact size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> React JS</h3>
                  <p className="font-thin text-sm">Frontend Development</p>
                </div>
              </div>
              {/* Next JS */}
              <div className="flex m-4 ">
                <div>
                  <SiDocker size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> Docker</h3>
                  <p className="font-thin text-sm">Deployment</p>
                </div>
              </div>
              {/* MongoDB */}
              <div className="flex m-4 ">
                <div>
                  <SiMongodb size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> MongoDB</h3>
                  <p className="font-thin text-sm">Database </p>
                </div>
              </div>
              {/* Postgress */}
              <div className="flex m-4 ">
                <div>
                  <SiPostgresql size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> PostgreSQL</h3>
                  <p className="font-thin text-sm">Database </p>
                </div>
              </div>
              {/* React Native */}
              <div className="flex m-4 ">
                <div>
                  <TbBrandReactNative size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> React Native</h3>
                  <p className="font-thin text-sm">Native App Development </p>
                </div>
              </div>
              {/* Swift  */}
              <div className="flex m-4 ">
                <div>
                  <SiSwift size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> Swift UI</h3>
                  <p className="font-thin text-sm">IOS App Development </p>
                </div>
              </div>
              {/* Aws  */}
              <div className="flex m-4 ">
                <div>
                  <SiAmazonaws size={72} />
                </div>
                <div className="m-2 hidden md:block">
                  <h3 className="font-bold"> AWS</h3>
                  <p className="font-thin text-sm">Cloud Computing </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
