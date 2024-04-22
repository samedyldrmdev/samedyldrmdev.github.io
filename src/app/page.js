import Image from "next/image";
import About from "./about/page";
import Courses from "./courses/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Header from "./header";
import HeaderTitle from "./headerTitle";

export default function Home() {
  return (
    <div>
      <Header title="/" />
      <HeaderTitle title="Home" />
      <div className="absolute right-1 w-96 bottom-2">
      <h1 className="text-black h-96 text-3xl -rotate-90 flex justify-end items-end ">
          DESIGNER & DEVELOPER
        </h1>
      </div>
      <div className="flex justify-center flex-col items-center h-screen px-40 ml-14">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-end">
            <h1 className="text-7xl font-semibold">SAMED YILDIRIM</h1>
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
              <li className="text-blue-500">
                NAVBAR HOVER ANİMASYONUNU DEĞİŞTİR!
              </li>
              <li className="text-blue-500">FOOTER DÜZENLE.</li>
              <p className="bg-gray-800 text-white">
                FOOTER BACKGROUND BEYAZ OLABİLİR.
              </p>
              <li className="text-blue-500">ABOUT DÜZENLEME ÖNERİLERİ</li>
              <p className="bg-gray-800 text-white">
                BİLİNEN DİLLER VS VS. BUNLARI GRAFİKSEL GÖSTER.
              </p>
            </ul>

            <iframe
              className=" absolute bottom-3 right-1/2 w-12"
              src="https://lottie.host/embed/0907640f-2208-4397-b983-661532f8fa96/0u7qaLq1hL.json"
            ><h1>
              aşağı</h1></iframe>
            <div className="mouse"></div>
          </div>
          <div>
            <Image
              className="mask w-[30rem] bg-red-500 pl-12 pt-10"
              src={"/images/pp2.png"}
              height={1024}
              width={1024}
            />
          </div>
        </div>
      </div>
      {/* <HeaderTitle title="Home" /> */}
      <Header title="About" />
      <HeaderTitle title="About" />
      <About />
      <Header title="Courses" />
      <HeaderTitle title="Certificates & Courses" />
      <Courses />
      <Header title="Projects" />
      <HeaderTitle title="Projects" />
      <Projects />
      <Header title="Skills" />
      <HeaderTitle title="Skills" />
      <Skills />
      <Header title="Contact" />
      <HeaderTitle title="Contact" />
      <Contact />
    </div>
  );
}
