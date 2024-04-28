"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import HeaderTitle from "../headerTitle";

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

  const coursesByOrganization = courses.reduce((acc, course) => {
    if (!acc[course.org]) {
      acc[course.org] = [];
    }
    acc[course.org].push(course);
    return acc;
  }, {});

  // Kurslara benzersiz ID'ler ekleyin
  courses.forEach((course, index) => {
    course.id = index;
  });

  const [visibility, setVisibility] = useState(
    new Array(Object.keys(coursesByOrganization).length).fill(false)
  );

  // Tıklama işlevi
  const detailsOn = (courseId) => {
    setVisibility(prevVisibility => {
      const newVisibility = new Array(courses.length).fill(false);
      // const newVisibility = [...prevVisibility];
      newVisibility[courseId] = !prevVisibility[courseId];
      return newVisibility;
    });
  };

  return (
    <div className="min-h-screen flex justify-center flex-col mt-4 bg-background-light">
      {Object.keys(coursesByOrganization).map((org,orgIndex) => (
        <div className="flex justify-start items-center flex-col">
          <div className="bg-blue-500  justify-start  w-1/2 rounded-xl m-1 font-bold text-lg p-3 text-white">
            {org}
          </div>
          {coursesByOrganization[org].map((course, courseIndex) => (
            <div className="bg-dark-iki hover:bg-[#3b3b3b] hover:shadow-md hover:shadow-black text-white w-1/2 rounded-xl cursor-pointer m-1">
              <h2
                onClick={() => {
                  detailsOn(course.id);
                }}
                className="text-md p-3"
              >
                {course.name}{" "}
                <FontAwesomeIcon
                  icon={visibility[course.id] ? faChevronRight : faChevronDown}
                />
              </h2>
              <div
                onClick={() => {
                  detailsOn(org, orgIndex, courseIndex);
                }}
                className={
                  visibility[course.id] ? "visible rounded-b-2xl" : "hidden"
                }
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
          ))}{" "}
        </div>
      ))}
    </div>
  );
}
