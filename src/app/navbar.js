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
import { useEffect, useState } from "react";
import HeaderTitle from "./headerTitle";

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
            // Aktif bölümü ve adını konsola yazdır
            console.log(section.id);
            console.log(section.name);
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
      <div className={`${navbarFont.className} mix-blend-difference`}>
        <HeaderTitle name={activeSectionName} />
      </div>
    </div>
  );
}
