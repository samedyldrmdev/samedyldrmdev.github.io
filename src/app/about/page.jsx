"use client";

import Image from "next/image";
import HeaderTitle from "../headerTitle";

export default function About() {
  const goProject = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background-dark text-white p-2 md:p-40 lg:p-40">
      <div className="flex flex-row gap-5 p-5">
        <div className="w-1/2 p-5 justify-center ">
          <h1 className="font-bold text-text-light py-4">About Me</h1>
          <p>
            Hello! I'm Samed, a Mechanical Engineer who has transitioned into
            the world of software development. <br /> I graduated from Beykent
            University and embarked on my journey into software by delving into
            artificial intelligence. <br />
            <br /> Since a young age, I've been fascinated by creating websites,
            and this passion eventually led me to make a swift transition into
            Front End Development. I've worked on numerous projects in the Front
            End domain and still find great joy in developing new ones. You can
            explore the projects I've worked on, utilizing technologies such as
            Javascript, React, Next.js, and Tailwind CSS, in the{" "}
            <span
              className="cursor-pointer font-bold  text-text-light hover:text-white "
              onClick={() => {
                goProject();
              }}
            >
              "Projects"
            </span>{" "}
            section. I'm committed to continuously improving myself and adapting
            to new technologies. My journey in the world of software has been
            both professional and exciting, and I continue to learn and explore
            more with each passing day. <br />{" "}
            <span className="font-bold text-text-light">
              I invite you to join me on this journey!
            </span>
          </p>
        </div>
        <div className="w-1/2 p-5  ">
          
          <div className=" flex flex-col justify-between px-24">
          <h1 className="font-bold text-text-light py-4 text-left">Languages</h1>
            <div className="flex flex-col gap-8">
              <div className="h-6  rounded-full  bg-white shadow-sm shadow-blue-500 relative ">
                <p className=" right-0 px-4 absolute z-10 text-black  text-l">
                  German - B1 <span className="italic">(Continuing to learn)</span>
                </p>
                <div className="h-6 w-[50%] rounded-full  bg-text-light shadow-sm shadow-blue-500  "></div>
              </div>
              <div className="h-6  rounded-full  bg-white shadow-sm shadow-blue-500 relative ">
                <p className="right-0 px-4 absolute z-10 text-black  text-l">
                  Turkish - Native
                </p>
                <div className="h-6 w-[100%] rounded-full  bg-text-light shadow-sm shadow-blue-500 relative "></div>
              </div>
              <div className="h-6  rounded-full  bg-white shadow-sm shadow-blue-500 relative ">
                <p className="right-0 px-4 absolute z-10 text-black  text-l">
                  English - A2
                </p>
                <div className="h-6 w-[33%] rounded-full  bg-text-light shadow-sm shadow-blue-500  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <button className="bg-white rounded-lg text-background-less-dark px-4 py-2 hover:shadow-sm hover:shadow-white">
          Download CV
        </button>
      </div> */}
    </div>
  );
}
