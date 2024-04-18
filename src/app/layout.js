import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Social from "./social"

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Samed YILDIRIM",
  description: "Samed YILDIRIM - Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <Social/>

        <div className="flex justify-center items-center h-screen p-40">{children}</div>
        </body>
    </html>
  );
}
