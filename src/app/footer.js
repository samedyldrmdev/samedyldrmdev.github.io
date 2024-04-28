import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const greatvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <div className="w-full bottom-0 py-2 bg-background grid grid-cols-4 gap-10 p-10 px-40  justify-center items-center text-center ">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-24"
          src={"/images/sylogodark.png"}
          width={1920}
          height={1080}
        />
        <h1>
          samed<span className="font-bold">yıldırım</span>
        </h1>
      </div>
      <div>
        <h1 className="font-bold p-2">Links</h1>
        <div className="w-full border border-background-dark"></div>
        <ul className="p-2">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Certificates & Courses</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold p-2">LynTech Digital</h1>
        <div className="w-full border border-background-dark"></div>
        <ul className="p-2">
          <li>Web Design</li>
          <li>Graphic Design</li>
          <li>Lyn Tech About</li>
          <li>Certificates & Courses</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          className="w-24 invert grayscale"
          src={"/images/lyntechlogo.png"}
          width={1920}
          height={1080}
        />
        <h1 >
          LynTech<span className="font-bold">Digital</span>
        </h1>
      </div>
    </div>
  );
}
