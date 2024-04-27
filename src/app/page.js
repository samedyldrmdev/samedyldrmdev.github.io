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

      {/* <div className="absolute right-1 bottom-2"> */}
      {/* <h1
          className={`${textMeOne.className} text-white h-96 text-3xl -rotate-90 flex justify-end items-end mix-blend-difference`}
        >
          DESIGNER & DEVELOPER
        </h1> */}
      {/* </div> */}
      <div className="flex w-full justify-center items-center h-screen">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col justify-center">
            <h1 className="lg:text-7xl md:text-5xl sm:text-2xl font-semibold text-text-dark">
              Hi, I'm Samed!
            </h1>
            <p className="py-4 text-text-dark">
              Someone striving to leave my mark in the digital world.
              <br />
              I'm here to share my passion for design and creative energy!
            </p>

            <ul className="list-decimal ">
              <h1 className="font-bold text-black mt-10">YAPILACAKLAR</h1>
              <li>FOOTER - TÜM PROJELER SAYFASI EKLE - COURSES KISMINI DÜZELT - ABOUT'U AYARLA!</li>
              <li>SCROLL BAR RENGİNİ STİLİNİ DEĞİŞTİR</li>
              <li>MOUSE SCROLL İLE BİR SAYFA İLERİ-GERİ GİT.</li>
              <li>SAĞ VEYA SOL TARAFA SAYFAYI TAKİP EDEN LINE EKLE.</li>
              <li className="">NAVBAR HOVER ANİMASYONUNU DEĞİŞTİR!</li>
              <li className="text-blue-500">ABOUT DÜZENLEME ÖNERİLERİ</li>
            </ul>

            <Image
              className="w-48"
              // invert
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
          <div className="scroll-down bg-white"></div>
        </div>
      </div>
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
