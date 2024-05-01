"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  faArrowUpRightFromSquare,
  faCaretRight,
  faCircleRight,
  faICursor,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  const links = [
    {
      name: "Lyn Tech - Digital Agency",

      description:
        "Lyn Tech is a digital agency that aims to provide comprehensive support to clients in various areas such as web design, graphic design, digital marketing, and software development. By offering a wide range of services, we empower clients to strengthen their digital presence. With our innovative solutions and creative approach, we tailor custom solutions to meet the unique needs of each client. At Lyn Tech, we are passionate about focusing on our clients' success and working tirelessly to elevate them in the digital world.",
      image: "/images/projects/lyntech.jpg",
      url: "https://lyntechdigital.com",
      skills: "Nextjs, Javascript, Tailwind CSS",
    },
    {
      name: "WortKarte",
      description:
        "I have developed the German vocabulary application that I had previously made. With this development, you can see the words when you hover over the white area, so you can test yourself. In addition, the project includes German and Turkish pronunciations of words. 'Tekrar Dinle!' if you don't understand the pronunciation. With the key, you can listen again.",
      image: "/images/projects/germanwords.jpeg",
      url: "/projects/WortKarte/index.html",
      skills: "HTML, CSS, Javascript",
      github: ""
    },
    {
      name: "Portfolio Website",
      description:
        "While coding my portfolio website, I employed robust technologies like Next.js and Tailwind CSS. Throughout the coding process, I prioritized clean and concise code, allowing for more efficient management of the project. By utilizing classes to list content such as projects and certifications, I aimed to create a dynamic structure, providing flexibility and usability. As a result, the website is easily editable and customizable.",
      image: "/images/projects/portfolio.gif",
      url: "/",
      skills: "Nextjs, React, Javascript, Tailwind CSS",
    },
    {
      name: "Weather App",
      description:
        "This weather application, developed using React, swiftly provides real-time weather information for any city you desire. Integrated with WeatherAPI, the app delivers accurate forecasts based on up-to-date data. Its user-friendly interface allows for easy city selection and weather checking. ",
      image: "/images/projects/weatherapp.png",
      url: "/weatherApp",
      skills: "React, Javascript, Weather API",
    },
    {
      name: "QR Menu",
      description:
        "In this project, the products dynamically pull information such as name, detail, price and image links from the csv file. It is then filtered by class names. With the add to cart feature, the products are saved in a class named 'basket'. And operations such as increasing or decreasing the number of products can be made. Also, the project is responsive.",
      image: "/images/projects/qr-menu.png",
      url: "/projects/qrMenu/",
      skills: "HTML, CSS, Javascript, Fetch API, Responsive",
    },
    {
      name: "Search Image",
      description:
        "This application, developed using React, allows you to search for images on various topics. Integrated with the Unsplash API, the app provides access to a vast database of photos and offers a fast search experience with its user-friendly interface. Start searching now and explore the world of visuals!",
      image: "/images/projects/searchimage.png",
      url: "/searchImage",
      skills: "React, Tailwind CSS, Unsplash API",
    },
    {
      name: "To - do List",
      description:
        "To do list project that I wrote with HTML, CSS and Javascript. I used CSS and Javascript effectively while creating this app. It has many functions such as adding, deleting and marking lists. In addition, all these transactions are recorded in LocalStorage. In this way, your changes will not be deleted when you refresh the browser! Thanks to this project, I developed myself a little more. I learned the concept of LocalStorage well. This project has become a small resource to look back on as I create my future projects.",
      image: "/images/projects/to-do-app.png",
      url: "/projects/toDoList",
      skills: "HTML, CSS, Javascript",
    },
  ];

  const [active, setActive] = useState(links[0]);

  const mouseEnter = (project) => {
    setActive(project);
  };

  const mouseLeave = () => {
    setActive(active);
  };

  // useEffect(()=> {

  // }, [active])

  return (
    <div className="bg-background-dark min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center text-white gap-2 md:gap-10 lg:gap-20 px-12 py-4 md:px-20 lg:px-40">
      {/* projects */}
      <div className="projects ">
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
              className={`cursor-pointer p-4 m-2 w-full rounded-full  hover:bg-blue-500 hover:text-white hover:font-bold ${
                active.name === project.name
                  ? "bg-blue-500 font-bold"
                  : "bg-white text-background-dark"
              }`}
            >
              {project.name === active.name ? (
                <span className="px-2">
                  {" "}
                  <FontAwesomeIcon className="px-1" icon={faAnglesRight} />{" "}
                  {project.name}
                </span>
              ) : (
                <span>{project.name}</span>
              )}
              {/* {project.name===active.name ? {project.name}} */}
            </div>
          );
        })}
      </div>

      {/* show */}
      <div className="show col-span-2 justify-center items-center">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-text-light p-5">{active.name}</h1>
          <Link
            href={active.url}
            className="px-3 hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
          <Link
            href={active.github}
            className="px-3 hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>

        <div>
          <Image
            className="rounded-2xl shadow-md shadow-dark-iki"
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

      {/* <HeaderTitle title="Projects" /> */}
    </div>
  );
}
