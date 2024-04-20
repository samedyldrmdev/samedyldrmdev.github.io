// 'use client'

import {
  Inter,
  Open_Sans,
  Josefin_Sans,
  Great_Vibes,
  Linefont,
  Wavefont,
  Moirai_One,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Social from "./social";
import Footer from "./footer";
import "atropos/css";
// import { useEffect } from 'react';


// Linefont, wavefont, Moirai One(başlık),

const inter = Open_Sans({ subsets: ["latin"] });
const josefin = Josefin_Sans({ subsets: ["latin"] });
const greatvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const linefont = Linefont({ subsets: ["latin"], weight: ["400"] });
const moiraione = Moirai_One({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Samed YILDIRIM",
  description: "Samed YILDIRIM - Portfolio Website",
  icon: {
    icon: "/public/favicon.png",
  },
};

const sections = [
  { name: "Home", id: "/" },
  { name: "About", id: "about" },
  { name: "Certificates & Courses", id: "courses" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function RootLayout({ children }) {

  

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar sections={sections} />
        <Social />
        <div className="flex justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
