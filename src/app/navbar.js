"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Cagliostro, Englebert, Girassol, Text_Me_One } from "next/font/google";
import {
  faXTwitter,
  faLinkedinIn,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import HeaderTitle from "./headerTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const navbarFont = Englebert({ subsets: ["latin"], weight: ["400"] });

export default function Navbar({ sections }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeSectionName, setActiveSectionName] = useState("/"); // Aktif bölümün adını tutan state

  const [activeSection, setActiveSection] = useState("/");

  const handleNavLinkClick = (id, name) => {
    scrollToSection(id);
    setActiveSection(id);
    setActiveSectionName(name);
  };

  useEffect(() => {
    // Sayfa kaydırıldığında çalışacak fonksiyonu tanımla
    const handleScroll = () => {
      // Belirli bir eşik değeri tanımla
      const threshold = 100;

      // Bölümler dizisini döngüye al
      sections.forEach((section) => {
        // Her bir bölümün DOM öğesini al
        const element = document.getElementById(section.id);
        if (element) {
          // Bölümün sayfa üzerindeki konumunu hesapla
          const top = element.getBoundingClientRect().top;

          // Eğer bölümün üst kenarı 0 ile threshold arasında ise
          if (top >= 0 && top <= threshold) {
            // Aktif bölümü ve adını state'e güncelle
            setActiveSection(section.id);
            setActiveSectionName(section.name);
          }
        }
      });
    };

    // İlk render sırasında handleScroll fonksiyonunu çağırarak, aktif bölümü belirle
    handleScroll();

    // Sayfa yüklendiğinde ve her pencere kaydırıldığında olay dinleyicisini ekle
    window.addEventListener("scroll", handleScroll);

    // Temizlik: Component kaldırıldığında olay dinleyicisini kaldır
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, setActiveSection, setActiveSectionName]); // useEffect'in yeniden çalışmasını sağlamak için bağımlılıklar eklendi

  // Mobile için Navbar Show

  const [navbarShow, setNavbarShow] = useState(false);
  const showNavbar = () => {
    
    setNavbarShow(!navbarShow);
  };

  return (
    <div>
      <div
        className={navbarShow ? "fixed h-full w-full bg-background-dark z-40" : "hidden"}
      >
        <div className="h-full w-full flex flex-col justify-center items-center z-50 text-white">
            {sections.map((section) => {
              return (
                <ul>
                  <li
                    key={section.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(section.id, section.name);
                      showNavbar();
                    }}
                    className={clsx(
                      "hover:animate-pulse max-w-max cursor-pointer text-xl p-2",
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
            <div className="absolute bottom-12 gap-8 flex ">
        <Link href={"https://twitter.com/sametyylldrm"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faXTwitter} />
        </Link>
        <Link href={"https://www.linkedin.com/in/samedyldrm/"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faLinkedinIn} />
        </Link>
        <Link href={"https://www.behance.net/samedyldrmm"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faBehance} />
        </Link>
        <Link href={"https://github.com/samedyldrmdev"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faGithub} />
        </Link>
      </div>
          </div>
          
      </div>
      <nav
        className={`${navbarFont.className} fixed w-full top-0 py-4 left-0 text-white z-50 bg-background-dark shadow-md shadow-background-less-dark`}
      >
        <div className="mx-auto px-8   flex justify-between items-center ">
          <div className="flex items-center">
            <Image
              className="w-8"
              src={"/images/sylogoneon.png"}
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
          <div className="space-x-12  flex-row hidden lg:flex ">
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
          <div
            onClick={() => {
              showNavbar();
            }}
            className="flex lg:hidden cursor-pointer"
          >
            <FontAwesomeIcon icon={navbarShow ? faBarsStaggered : faBars} />
          </div>
        </div>
      </nav>
      <div
        className={`${navbarFont.className} mix-blend-difference`}
      >
        <HeaderTitle name={activeSectionName} />
      </div>
    </div>
  );
}
