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
    <div className="p-24 px-56 bg-background-dark">
      <div className="">
        {links.map((link) => {
          return (
            <Link href={link.url}>
              <div className="">
                <div className="group  [perspective:1000px] w-full">
                  <div className="grid grid-cols-2 p-3">
                  <div className=" rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="relative">
                      <Image
                        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                        src={link.image}
                        height={1920}
                        width={1080}
                      ></Image>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold">{link.name}</h1>
                        {/* <p className="text-lg">Photographer & Art</p> */}
                        <p className="text-base">
                          {link.description}
                        </p>
                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

            </Link>
          );
        })}
      </div>
    </div>
  );
}
