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
    description: "Samed YILDIRIM - Portfolio Website",
  });

  useEffect(() => {
    setLoading(false);
  }, [2000]);

  
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
            <Image className="w-24" src= {"/images/logo.gif"} height={720} width={720} unoptimized>

            </Image>
          </div>
        ) : (
          //
          <div className="">
            <div>
             <Navbar sections={sections} />
            <div className="flex justify-center items-center bg-background-light">{children}</div>
            <Social />
            
            <Footer />
          </div>
          </div>
        )}
      </body>
    </html>
  );
}
