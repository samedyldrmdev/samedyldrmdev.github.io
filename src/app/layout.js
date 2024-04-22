"use client";

import { Montserrat, Open_Sans, Oswald, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Social from "./social";
import Footer from "./footer";
import "atropos/css";
import { useState, useEffect } from "react";

// Linefont, wavefont, Moirai One(başlık),

const bodyFont = Quicksand({ subsets: ["latin"], weight: ["400"] });

// export const metadata = {
//   title: "Samed YILDIRIM",
//   description: "Samed YILDIRIM - Portfolio Website",
// };

const sections = [
  { name: "Home", id: "/" },
  { name: "About", id: "about" },
  { name: "Certificates & Courses", id: "courses" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <html lang="en">
      <body className={bodyFont.className}>
        {loading ? (
          <div className="h-screen w-screen flex justify-center items-center ">
            <div className="loader"></div>
          </div>

          // 
        ) : (
          <div>
            <Navbar sections={sections} />
            <Social />
            <div className="flex justify-center items-center">{children}</div>
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
