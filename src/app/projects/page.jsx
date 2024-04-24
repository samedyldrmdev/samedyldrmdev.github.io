import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const links = [
    {
      name: "WortKarte(CSS - Javascript)",
      description:
        "Ich habe die deutsche Vokabelanwendung entwickelt, die ich zuvor gemacht hatte. Mit dieser Entwicklung können Sie die Wörter sehen, wenn Sie mit der Maus über den weißen Bereich fahren, sodass Sie sich selbst testen können. Darüber hinaus umfasst das Projekt deutsche und türkische Aussprachen von Wörtern. 'Tekrar Dinle!', wenn Sie die Aussprache nicht verstehen. Mit der Taste können Sie noch einmal zuhören.",
      image: "/images/projects/germanwords.jpeg",
      url: "https://samedyldrmdev.github.io/front-end-projects/WortKarte/index.html",
    },
    {
      name: "Personal Web Page",
      description:
        "My personal web page that I created using HTML and CSS. I continue to develop this web page that contains information about me.",
      image: "/images/projects/portfolio-website.png",
      url: "https://samedyldrmdev.github.io/index.html",
    },
    {
      name: "Weather App (HTML, CSS & JavaScript)",
      description: "Weather App",
      image: "/images/projects/weatherapp.png",
      url: "https://samedyldrmdev.github.io/weatherApp",
    },
    {
      name: "QR Menu (CSS - JavaScript)",
      description:
        "In this project, the products dynamically pull information such as name, detail, price and image links from the csv file. It is then filtered by class names. With the add to cart feature, the products are saved in a class named 'basket'. And operations such as increasing or decreasing the number of products can be made. Also, the project is responsive.",
      image: "/images/projects/qr-menu.png",
      url: "https://google.com",
    },
    {
      name: "Search Image (React, Tailwind CSS)",
      description: "Search Image Project.",
      image: "/images/projects/searchimage.png",
      url: "https://google.com",
    },
    {
      name: "To - do List (JavaScript)",
      description: "To - Do List Project",
      image: "/images/projects/to-do-app.png",
      url: "https://google.com",
    },
  ];

  return (
    <div className="bg-background-dark h-screen flex justify-center items-center text-white gap-20">
      {/* show */}
      <div className="show w-1/2">
        <Image
          src={"/images/projects/weatherapp.png"}
          height={1920}
          width={1080}
        ></Image>
      </div>

      {/* projects */}
      <div className="projects">
        <h1 className="font-bold text-2xl text-red-400 ">Projects</h1>
        {links.map((project) => {
          return <div className="cursor-pointer ">{project.name}</div>;
        })}
      </div>
    </div>
  );
}
