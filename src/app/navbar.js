"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Cagliostro, Englebert, Girassol, Text_Me_One } from "next/font/google";

import {
  faTwitter,
  faLinkedin,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import HeaderTitle from "./headerTitle";

const navbarFont = Englebert({ subsets: ["latin"], weight: ["400"] });

export default function Navbar({ sections }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeSectionName, setActiveSectionName] = useState("Home"); // Aktif bölümün adını tutan state

  const [activeSection, setActiveSection] = useState("/");

  const handleNavLinkClick = (id, name) => {
    scrollToSection(id);
    setActiveSection(id);
    setActiveSectionName(name);
  };

  return (
    <div>
      <nav
        className={`${navbarFont.className} fixed w-full top-0 py-4 left-0 text-white z-50 bg-background-dark shadow-md shadow-background-less-dark`}
      >
        <div className="mx-auto lg:px-16 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              className="w-6 "
              src={"/images/sylogo.png"}
              width={100}
              height={100}
              alt="Lyn Tech Digital"
            ></Image>

            <Link href={"/"}>
              <h1 className="text-xl pl-4 text-white">
                samed<span className="font-bold text-text-light">yıldırım</span>
              </h1>
            </Link>
          </div>
          <div className="space-x-12 flex flex-row">
            {sections.map((section) => {
              return (
                <ul>
                  <li
                    key={section.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(section.id, section.name);
                    }}
                    className={clsx(
                      "hover:animate-pulse max-w-max cursor-pointer",
                      {
                        "text-text-light font-bold":
                          activeSection === section.id,
                      }
                    )}
                  >
                    {section.name}
                  </li>
                </ul>
              );
            })}
          </div>
          {/* <div>
          <Link className="" href={"https://www.lyntechdigital.com"}>
            <Image
            className="w-12"
              src={"/images/lyntechlogo.png"}
              width={720}
              height={720}
              alt="Lyn Tech Digital"
            ></Image>
          </Link>
        </div> */}
        </div>
      </nav>
      <div
        className={`${navbarFont.className} mix-blend-difference sm:hidden md:hidden`}
      >
        <HeaderTitle name={activeSectionName} />
      </div>
    </div>
  );
}
