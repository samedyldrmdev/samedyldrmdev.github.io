"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faArrowUpRightFromSquare, faCaretRight, faCircleRight, faICursor, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const links = [
    {
      name: "Lyn Tech (My Digital Agent)",

      description:
        "To do list project that I wrote with HTML, CSS and Javascript. I used CSS and Javascript effectively while creating this app. It has many functions such as adding, deleting and marking lists. In addition, all these transactions are recorded in LocalStorage. In this way, your changes will not be deleted when you refresh the browser! Thanks to this project, I developed myself a little more. I learned the concept of LocalStorage well. This project has become a small resource to look back on as I create my future projects.",
      image: "/images/projects/to-do-app.png",
      url: "https://google.com",
      skills: "HTML, CSS, Javascript",
    },
    {
      name: "WortKarte",
      description:
        "Ich habe die deutsche Vokabelanwendung entwickelt, die ich zuvor gemacht hatte. Mit dieser Entwicklung können Sie die Wörter sehen, wenn Sie mit der Maus über den weißen Bereich fahren, sodass Sie sich selbst testen können. Darüber hinaus umfasst das Projekt deutsche und türkische Aussprachen von Wörtern. 'Tekrar Dinle!', wenn Sie die Aussprache nicht verstehen. Mit der Taste können Sie noch einmal zuhören.",
      image: "/images/projects/germanwords.jpeg",
      url: "https://samedyldrmdev.github.io/front-end-projects/WortKarte/index.html",
      skills: "HTML, CSS, Javascript",
    },
    {
      name: "Personal Web Page",
      description:
        "My personal web page that I created using HTML and CSS. I continue to develop this web page that contains information about me.",
      image: "/images/projects/portfolio-website.png",
      url: "https://samedyldrmdev.github.io/index.html",
      skills: "HTML, CSS, Javascript",
    },
    {
      name: "Weather App",
      description: "Weather App",
      image: "/images/projects/weatherapp.png",
      url: "/weatherApp",
      skills: "HTML, CSS, Javascript",
    },
    {
      name: "QR Menu",
      description:
        "In this project, the products dynamically pull information such as name, detail, price and image links from the csv file. It is then filtered by class names. With the add to cart feature, the products are saved in a class named 'basket'. And operations such as increasing or decreasing the number of products can be made. Also, the project is responsive.",
      image: "/images/projects/qr-menu.png",
      url: "/",
      skills: "HTML, CSS, Javascript, Fetch API",
    },
    {
      name: "Search Image",
      description: "Search Image Project.",
      image: "/images/projects/searchimage.png",
      url: "https://google.com",
      skills: "React, Tailwind CSS",
    },
    {
      name: "To - do List",
      description:
        "To do list project that I wrote with HTML, CSS and Javascript. I used CSS and Javascript effectively while creating this app. It has many functions such as adding, deleting and marking lists. In addition, all these transactions are recorded in LocalStorage. In this way, your changes will not be deleted when you refresh the browser! Thanks to this project, I developed myself a little more. I learned the concept of LocalStorage well. This project has become a small resource to look back on as I create my future projects.",
      image: "/images/projects/to-do-app.png",
      url: "https://google.com",
      skills: "HTML, CSS, Javascript",
    },
  ];

  const [active, setActive] = useState(links[0]);

  const mouseEnter = (project) => {
    setActive(project);
  };

  const mouseLeave = () => {
    console.log("hover deaktif.");
    setActive(active);
  };

  // useEffect(()=> {

  // }, [active])

  return (
    <div className="bg-background-dark min-h-screen grid grid-cols-3 px-40 justify-center items-center text-white gap-20">
      {/* show */}
      <div className="show col-span-2 justify-center items-center">
        <h1 className="font-bold text-text-light p-5">{active.name}<Link
            href={active.url}
            className="px-3 hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link></h1>
        
        <div>
          <Image
            className="rounded-3xl shadow-md shadow-text-light"
            src={active.image}
            height={1920}
            width={1080}
          ></Image>
        </div>

        <div>
          <h1 className="min-h-36 p-5 italic">{active.description}</h1>
        </div>
        <div className="flex gap-2 px-5">
          {active.skills.split(",").map((skill, index) => {
            return (
              <div className="px-5 bg-gray-600 rounded-full ">
                <h2 key={index}>{skill}</h2>
              </div>
            );
          })}
          
        </div>
      </div>

      {/* projects */}
      <div className="projects">
        {/* <h1 className="font-bold text-2xl text-red-400 ">Projects</h1> */}
        {links.map((project) => {
          return (
            <div
              onMouseEnter={() => {
                mouseEnter(project);
              }}
              onMouseLeave={() => {
                mouseLeave(project);
              }}
              className={`cursor-pointer p-4 m-2 w-full rounded-full  hover:bg-blue-500 hover:text-white hover:font-bold ${active.name === project.name ? "bg-blue-500 font-bold" : "bg-white text-background-dark" }`  }
            >
              {project.name===active.name ? (<span className="px-2"> <FontAwesomeIcon className="px-1" icon={faAnglesRight}/> {project.name}</span>) : (<span>{project.name}</span>)}
              {/* {project.name===active.name ? {project.name}} */}
            </div>
          );
        })}
      </div>
      {/* <HeaderTitle title="Projects" /> */}
    </div>
  );
}
