import Image from "next/image";
import About from "./about/page";
import Courses from "./courses/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <div
        id="/"
        className="flex justify-center items-center h-screen px-40 ml-14"
      >
        <div className="grid grid-cols-2">
          <div>
            <Image
              className="w-[48rem] absolute bottom-0 -z-10 items-center flex grayscale"
              src={"/images/pp2.png"}
              height={1920}
              width={1080}
            />
          </div>
          <div className="flex flex-col justify-end">
            <h1 className="text-7xl font-semibold">samed yıldırım</h1>
            <p className="py-4">
              Someone striving to leave my mark in the digital world. I'm here
              to share my passion for design and creative energy!
            </p>
            <Image
              className="w-44"
              src={"/images/imza.png"}
              height={1920}
              width={1080}
            />

            <ul className="list-decimal">
              <h1 className="font-bold text-red-400 mt-10">YAPILACAKLAR</h1>
              <li>SCROLL BAR RENGİNİ STİLİNİ DEĞİŞTİR</li>
              <li>SAYFA AŞAĞI KAYDIKÇA NAVBARI GÜNCELLEME</li>
              <li>KENDİ SCROLL ANİMASYONUNU YAP.</li>
              <li>MOUSE SCROLL İLE BİR SAYFA İLERİ-GERİ GİT.</li>
              <li>SAĞ VEYA SOL TARAFA SAYFAYI TAKİP EDEN LINE EKLE.</li>
              <li className="text-blue-500">NAVBAR HOVER ANİMASYONUNU DEĞİŞTİR!</li>
              <li className="text-blue-500">FOOTER DÜZENLE.</li>
              <p className="bg-gray-800 text-white">FOOTER BACKGROUND BEYAZ OLABİLİR.</p>
              <li className="text-blue-500">CODING...</li>
            </ul>

            <iframe className=" absolute bottom-5 right-32 w-12" src="https://lottie.host/embed/0907640f-2208-4397-b983-661532f8fa96/0u7qaLq1hL.json"></iframe>
            <div className="mouse"></div>
          </div>
        </div>
        <h1 className="text-black text-4xl -rotate-90 absolute -right-40 bottom-1/4 -z-20">
          DESIGNER & DEVELOPER
        </h1>
      </div>
      <Header title="About" />
      <About />
      <Header title="Courses" />
      <Courses />
      <Header title="Projects" />
      <Projects />
      <Header title="Skills" />
      <Skills />
      <Header title="Contact" />
      <Contact />
    </div>
  );
}
