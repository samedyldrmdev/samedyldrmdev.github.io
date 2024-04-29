import Image from "next/image";
import Header from "./header";
import { Text_Me_One } from "next/font/google";

const textMeOne = Text_Me_One({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div>
      <Header title="/" />
      <div className="flex w-full justify-center items-center h-screen">
        <div className="grid grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-2 text-center ">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl lg:text-7xl font-semibold text-text-dark">
              Hi, I'm Samed!
            </h1>
            <p className="py-4 text-text-dark">
              Someone striving to leave my mark in the digital world.
              <br />
              I'm here to share my passion for design and creative energy!
            </p>
            <Image
              className="w-48 "
              // invert
              src={"/images/imza.png"}
              height={1920}
              width={1080}
            />
          </div>
          <div>
            <Image
              className="bottom-0 w-96 rounded-full pl-12 pt-10 grayscale "
              src={"/images/pp.jpg"}
              height={1024}
              width={1024}
            />
          </div>
          <div className="w-full h-1/2 bg-[#252525] absolute bottom-0 left-0 -z-40 "></div>
          <div className="p-8">
            <div className="scroll-down bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
