import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const greatvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <div className="bg-[#202020] text-gray-300">
      <div className=""></div>
      <div className="w-full bottom-0 bg-background grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 py-8 px-20  justify-center text-center   ">
        <div className="flex flex-col justify-center items-center ">
          <Image
            className="w-24 invert"
            src={"/images/sylogodark.png"}
            width={1920}
            height={1080}
          />
          <h1>
            samed<span className="font-bold">yıldırım</span>
          </h1>
        </div>
        <div className="items-start">
          <h1 className="font-bold p-2 ">Links</h1>
          <ul className="p-2">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Certificates & Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="items-start ">
          <h1 className="font-bold p-2 ">LynTech Digital</h1>
          <ul className="p-2">
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>Logo Design</li>
            <li>Social Media</li>
            <li>Lyn Tech About</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            className="w-24 "
            src={"/images/lyntechlogo.png"}
            width={1920}
            height={1080}
          />
          <h1>
            LynTech<span className="font-bold">Digital</span>
          </h1>
        </div>
      </div>

      <div className="px-96 hidden lg:block">
        <hr className="text-gray-400"/>
        <div className="flex flex-row justify-center items-center gap-4 p-8">
          <Link href={"https://twitter.com/sametyylldrm"}>
            <FontAwesomeIcon
              className="size-5 hover:bg-white hover:text-background-dark border rounded-full p-2"
              icon={faXTwitter}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/samedyldrm/"}>
            <FontAwesomeIcon
              className="size-5 hover:bg-white hover:text-background-dark border rounded-full p-2"
              icon={faLinkedinIn}
            />
          </Link>
          <Link href={"https://www.behance.net/samedyldrmm"}>
            <FontAwesomeIcon
              className="size-5 hover:bg-white hover:text-background-dark border rounded-full p-2"
              icon={faBehance}
            />
          </Link>
          <Link href={"https://github.com/samedyldrmdev"}>
            <FontAwesomeIcon
              className="size-5 hover:bg-white hover:text-background-dark border rounded-full p-2"
              icon={faGithub}
            />
          </Link>         
        </div>
        <h3 className="flex flex-row justify-center items-center p-2 ">Copyright &copy; 2024 Samed YILDIRIM - Lyn Tech </h3>
      </div>
    </div>
  );
}
