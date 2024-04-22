import Image from "next/image";

const skills = [
  { name: "HTML", level: 10, type: "Software" },
  { name: "CSS", level: 20, type: "Software" },
  { name: "Javascript", level: 30, type: "Software" },
  { name: "Python", level: 40, type: "Software" },
  { name: "Numpy", level: 50, type: "Artificial Intelligence" },
  { name: "Pandas", level: 60, type: "Artificial Intelligence" },
  { name: "Seaborn", level: 70, type: "Artificial Intelligence" },
  { name: "Sklearn", level: 80, type: "Artificial Intelligence" },
  { name: "Matplotlip", level: 95, type: "Artificial Intelligence" },
  { name: "Tensorflow", level: 95, type: "Artificial Intelligence" },
  { name: "Keras", level: 95, type: "Artificial Intelligence" },
  { name: "Selenium", level: 95, type: "Artificial Intelligence" },
  { name: "Solidworks", level: 95, type: "Engineering" },
  { name: "Autocad", level: 95, type: "Engineering" },
  { name: "Adobe Illustrator", level: 95, type: "Graphic Design" },
  { name: "Adobe Photoshop", level: 95, type: "Graphic Design" },
  { name: "Sony Vegas Pro", level: 95, type: "Graphic Design" },
  { name: "Blender", level: 95, type: "Graphic Design" },
  { name: "ZBbrush", level: 95, type: "Graphic Design" },
  { name: "Microsoft Word", level: 95, type: "Microsoft Office" },
  { name: "Microsoft Excel", level: 95, type: "Microsoft Office" },
  { name: "Microsoft Powerpoint", level: 95, type: "Microsoft Office" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background-dark text-white p-40">
      <div className="flex flex-row justify-center gap-10 items-center p-5">
        {/* <Image
            className="w-96 rounded-full grayscale hover:grayscale-0"
            src={"/images/pp.jpg"}
            height={1920}
            width={1080}
          /> */}
        <p>
          Hello! I am Abdülsamed YILDIRIM.
          <br />I graduated from Beykent University Mechanical Engineering. I
          got into the software world with Python. I received training on
          Artificial Intelligence, Machine Learning and Deep Learning and
          developed projects. I am currently developing myself in the Front -
          End field.
        </p>
      </div>

      <div className="grid grid-cols-4">
        {skills.map((skill) => {
          return (
            <div className="p-2">
              <h1>{skill.name}</h1>
              <div className={`h-4 w-[10rem] rounded-full bg-white `}>
              <div
            className={`h-4 rounded-full ${
              skill.type === "Software" ? "bg-blue-400" : "bg-red-400"
            }`}
            style={{ width: `${parseInt(skill.level) / 10}rem` }}
          ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Skills Page Software:
// HTML, CSS, Javascript, Python, Numpy, Pandas, Seaborn, Sklearn, Matplotlib, Tensorflow, Keras, Selenium
// Engineering: Solidworks, Autocad

// Graphic Design: Adobe Illustrator, Adobe Photoshop, Sony Vegas Pro, Blender, ZBbrush
