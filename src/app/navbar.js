"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { faTwitter, faLinkedin, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  { name: "Home", href: "/" , icon: {faTwitter}},
  { name: "About", href: "/about", icon: {faTwitter} },
  { name: "Certificates & Courses", href: "/courses", icon: {faTwitter} },
  { name: "Projects", href: "/projects", icon: {faTwitter} },
  { name: "Skills", href: "/skills", icon: {faTwitter} },
  { name: "Contact", href: "/contact", icon: {faTwitter} },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute w-full top-0 left-0 py-6 bg-gray-800 text-white">
      <div className="mx-auto px-16 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}>
            samed<span className="font-bold">yıldırım</span>
          </Link>
        </div>
        <div className="space-x-12 flex flex-row">
          {links.map((link) => {
            return (
                
              <Link
                href={link.href}
                className={clsx("hover:text-red-300 max-w-max", {
                  "text-sky-300": pathname === link.href,
                })}
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </Link>
            );
          })}

          <Link className="pl-20" href={"https://www.lyntechdigital.com"}>
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
