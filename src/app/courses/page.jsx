"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      name: "Deep Learning - Bootcamp (Mentor)",
      desc: "Ich habe aktiv am Deep Learning Bootcamp teilgenommen, das in Zusammenarbeit mit Global AI Hub, Koç Holding und Aygaz W-Energy For Equality veranstaltet wurde. In diesem dreiwöchigen zertifizierten Programm hatte ich die Möglichkeit, End-to-End-Projekte durchzuführen und dabei meine Kenntnisse in den Bereichen Python, Datenanalyse und Deep Learning auf Türkisch zu vertiefen. Darüber hinaus war ich als Mentor im Bootcamp tätig und hatte die Gelegenheit, andere Teilnehmer zu unterstützen und meine Erfahrungen zu teilen. Während dieser Zeit habe ich auch von interaktiven Schulungen im Bereich Unternehmertum und Innovation profitiert, die mit innovativen Lern- und Gamification-Methoden entwickelt wurden.",
      org: "Global AI Hub",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "AI Summer Camp - Bootcamp",
      desc: "",
      org: "Global AI Hub",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "Python for Machine Learning",
      desc: "",
      org: "Global AI Hub",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "Introduction to Machine Learning",
      desc: "",
      org: "Global AI Hub",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "Introduction to Deep Learning",
      desc: "",
      org: "Global AI Hub",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "Introduction to Python",
      desc: "",
      org: "Global AI Hub",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "Makine Öğrenmesine Giriş",
      desc: "",
      org: "Global AI Hub",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "50+ Saat Tüm Yönleriyle Python 3 Programlama (2022)",
      desc: "",
      org: "Udemy",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "Yapay Zeka ve Veri Bilimi için Python Programlama",
      desc: "",
      org: "Udemy",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
    {
      name: "Makine Öğrenmesi 101",
      desc: "",
      org: "Turkcell Geleceği Yazanlar",
      url: "https://github.com/samettyldrm/my-certificates/raw/main/Deep%20Learning%20-%20Mentor.png",
    },
  ];



  const [visibility, setVisibility] = useState(
    new Array(courses.length).fill(false)
  );

  const onDetails = (index) => {
    const newVisibility = new Array(courses.length).fill(false);
    if (visibility[index] === false) {
      newVisibility[index] = !newVisibility[index];
    }
    setVisibility(newVisibility);
  };

  return (
    <div className="flex justify-start mt-44 items-center flex-col h-screen">
      {courses.map((course, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              onDetails(index);
            }}
            className="bg-[#2a2a2a] hover:bg-[#3b3b3b] hover:shadow-md justify-start hover:shadow-black text-white w-1/2 rounded-2xl cursor-pointer m-1"
          >
            <h1 className="font-bold text-lg p-3">
              {course.name}{" "}
              <FontAwesomeIcon
                icon={visibility[index] ? faChevronRight : faChevronDown}
              />
            </h1>
            <div
              className={visibility[index] ? "visible rounded-b-2xl" : "hidden"}
            >
              <p className="p-2">{course.desc}</p>
              <p className="italic p-2">
                I received this certification from {course.org}.{" "}
                <Link
                  className="hover:text-red-300 font-bold"
                  href={course.url}
                >
                  Click here to view the certificate.
                </Link>
              </p>
              
            </div>
            
          </div>
        );
      })}
      <Link href={"/blog"} className="font-bold">TIKLA</Link>
    </div>
  );
}

  //Kuruluşlara göre kursları gruplamak için bir obje oluşturun

  
  // const coursesByOrganization = courses.reduce((acc, course) => {
  //   if (!acc[course.org]) {
  //     acc[course.org] = [];
  //   }
  //   acc[course.org].push(course);
  //   return acc;
  // }, {});

/* {Object.keys(coursesByOrganization).map((orgName) => (
        <div  className="bg-slate-200" key={orgName}>
          <h1 className="font-bold">{orgName}</h1>
          <ul>
            {coursesByOrganization[orgName].map((course, index) => (
              <li key={index}>{course.name}
              <li className="hidden">
              {course.desc}</li></li>
              
            ))}
            
          </ul>
          <p>Note: *Clicking on the certificate goes to the address containing the document.</p>
        </div>
      ))} */
