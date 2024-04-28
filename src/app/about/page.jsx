'use client'

import Image from "next/image";
import HeaderTitle from "../headerTitle";


export default function About() {

  const goProject = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView({ behavior: "smooth" });

  }

  return (
    <div className="h-screen bg-background-dark text-white p-40">
      
      <div className="flex flex-row justify-start gap-10 items-center p-5">
        
        <div className="w-1/2 p-5 justify-center ">
        <p>
          Hello! I'm Samed, a Mechanical Engineer who has transitioned into
          the world of software development. <br /> I graduated from Beykent University
          and embarked on my journey into software by delving into artificial
          intelligence. <br />
          <br /> Since a young age, I've been fascinated by creating
          websites, and this passion eventually led me to make a swift
          transition into Front End Development. I've worked on numerous
          projects in the Front End domain and still find great joy in
          developing new ones. You can explore the projects I've worked on,
          utilizing technologies such as Javascript, React, Next.js, and
          Tailwind CSS, in the <span className="cursor-pointer font-bold  text-text-light hover:text-white " onClick={()=>{goProject()}}>"Projects"</span> section. I'm committed to
          continuously improving myself and adapting to new technologies. My
          journey in the world of software has been both professional and
          exciting, and I continue to learn and explore more with each passing
          day. <br /> <span className="font-bold text-text-light">I invite you to join me on this journey!</span>
        </p>
        </div>
      </div>
      {/* <HeaderTitle title="About" /> */}
    </div>
  );
}
