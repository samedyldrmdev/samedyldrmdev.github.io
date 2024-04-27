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
      <div className="flex min-w-full justify-center items-center h-screen px-40 ml-14 ">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col justify-center mix-blend-difference">
            <h1 className="lg:text-7xl md:text-5xl sm:text-2xl font-semibold text-white">
              Hi, I'm Samed!
            </h1>
            <p className="py-4 text-white">
              Someone striving to leave my mark in the digital world.
              <br />
              I'm here to share my passion for design and creative energy!
            </p>

            <Image
              className="w-48 invert"
              src={"/images/imza.png"}
              height={1920}
              width={1080}
            />
          </div>
          <div>
            <Image
              className="bottom-0 w-96 rounded-full pl-12 pt-10 grayscale"
              src={"/images/pp.jpg"}
              height={1024}
              width={1024}
            />
          </div>
          <div className="w-full h-1/2 bg-[#252525] absolute bottom-0 left-0 -z-40 "></div>
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
