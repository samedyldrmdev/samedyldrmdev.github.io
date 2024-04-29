"use client";

import {
  Montserrat,
  Montserrat_Alternates,
  Open_Sans,
  Oswald,
  Quicksand,
  Galindo,
  Karantina,
  Nova_Script,
  Girassol,
  Mohave,
  Cagliostro,
} from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Social from "./social";
import Footer from "./footer";
import "atropos/css";
import { useState, useEffect } from "react";
import HeaderTitle from "./headerTitle";
import Image from "next/image";
import About from "./about/page";
import Courses from "./courses/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Header from "./header";
// import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation';

// Linefont, wavefont, Moirai One(başlık),

const bodyFont = Cagliostro({ subsets: ["latin"], weight: ["400"] });

// export const metadata = {
//   title: "Samed YILDIRIM",
//   description: "Samed YILDIRIM - Portfolio Website",
// };

const sections = [
  { name: "Home", id: "/" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certificates & Courses", id: "courses" },
  { name: "Contact", id: "contact" },
];

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [metadata, setMetadata] = useState({
    title: "Samed YILDIRIM",
    description: "Learn more about Samed YILDIRIM on his portfolio website.",
  });

  useEffect(() => {
    setLoading(false);
  }, [2000]);

  const pathname = usePathname(); // Yeni hook'u kullanarak pathname'i alın
  const isHomePage = pathname === "/"; // Anasayfada mıyız?

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        <link rel="icon" type="image/png" href="/images/sylogodark.png" />
        {/* Diğer meta etiketleri */}
      </head>
      <body className={`${bodyFont.className} `}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Image
              className="w-24"
              src={"/images/logo.gif"}
              height={720}
              width={720}
              unoptimized
            ></Image>
          </div>
        ) : (
          //
          <div>
            <div>
              {isHomePage && (<Navbar sections={sections}/>)}
            </div>
            <div className="flex justify-center items-center bg-background-light">
              {children}
            </div>
            {isHomePage && (
              <>
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
                <Social />
                <Footer />
              </>
            )}
          </div>
        )}
      </body>
    </html>
  );
}
