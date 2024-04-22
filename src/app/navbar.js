"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {
  faTwitter,
  faLinkedin,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Navbar({ sections }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeSection, setActiveSection] = useState("/");

  const handleNavLinkClick = (id) => {
    scrollToSection(id);
    setActiveSection(id);
  };

  return (
    <nav className="fixed w-full top-0 py-4 left-0 text-white mix-blend-difference z-50">
      <div className="mx-auto px-16 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            className="w-6"
            src={"/images/sylogo.png"}
            width={100}
            height={100}
            alt="Lyn Tech Digital"
          ></Image>

          <Link href={"/"}>
            <h1 className="text-xl pl-4 text-white">
              samed<span className="font-medium">yıldırım</span>
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
                    handleNavLinkClick(section.id);
                  }}
                  className={clsx(
                    "hover:text-red-300 max-w-max cursor-pointer",
                    {
                      "text-sky-300": activeSection === section.id,
                    }
                    
                  )}
                >
                  {section.name.toUpperCase()}
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <Link className="" href={"https://www.lyntechdigital.com"}>
            <Image
              src={"/images/lyntechlogo.png"}
              width={50}
              height={50}
              alt="Lyn Tech Digital"
            ></Image>
          </Link>
        </div>
      </div>
    </nav>
  );
}
