import Image from "next/image";
import About from "./about/page";
import Courses from "./courses/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Header from "./header";
import HeaderTitle from "./headerTitle";
import { Text_Me_One } from "next/font/google";

const textMeOne = Text_Me_One({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div>
      <Header title="/" />

      <div className="absolute right-1 w-96 bottom-2">
        {/* <h1
          className={`${textMeOne.className} text-white h-96 text-3xl -rotate-90 flex justify-end items-end mix-blend-difference`}
        >
          DESIGNER & DEVELOPER
        </h1> */}
      </div>
      <div className="flex justify-center flex-col items-center h-screen px-40 ml-14">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-end">
            <h1 className="text-7xl font-semibold">Hi, I'm Samed!</h1>
            <p className="py-4">
              Someone striving to leave my mark in the digital world.{" "}
            </p>
            <p>I'm here to share my passion for design and creative energy!</p>

            <Image
              className="w-44"
              src={"/images/imza.png"}
              height={1920}
              width={1080}
            />
          </div>
          <div>
            <Image
              className="absolute bottom-0 w-[45rem] pl-12 pt-10 grayscale"
              src={"/images/pp2.png"}
              height={1024}
              width={1024}
            />
          </div>
          <div className="w-full h-1/3 bg-[#252525] absolute bottom-0 left-0 -z-40 "></div>
        </div>
        <div className="absolute bottom-3 right-1/2">
          <div className="scroll-down  bg-white"></div>
        </div>
      
      </div>
      {/* <HeaderTitle title="Home" /> */}
      <Header title="About" />
      <About />
      <Header title="Skills" />
      <Skills />
      <Header title="Projects" />
      <Projects />
      <Header title="Courses" />
      <Courses />
      <Header title="Contact" />
      <Contact />
    </div>
  );
}
