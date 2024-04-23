import Image from "next/image";

const skills = [
  { name: "HTML", level: 100, type: "Software" },
  { name: "CSS", level: 75, type: "Software" },
  { name: "Javascript", level: 30, type: "Software" },
  { name: "Python", level: 60, type: "Software" },
  { name: "Numpy", level: 50, type: "Artificial Intelligence" },
  { name: "Pandas", level: 40, type: "Artificial Intelligence" },
  { name: "Seaborn", level: 30, type: "Artificial Intelligence" },
  { name: "Sklearn", level: 30, type: "Artificial Intelligence" },
  { name: "Matplotlip", level: 30, type: "Artificial Intelligence" },
  { name: "Tensorflow", level: 30, type: "Artificial Intelligence" },
  { name: "Keras", level: 30, type: "Artificial Intelligence" },
  { name: "Selenium", level: 30, type: "Artificial Intelligence" },
  { name: "Solidworks", level: 50, type: "Engineering" },
  { name: "Autocad", level: 95, type: "Engineering" },
  { name: "Adobe Illustrator", level: 95, type: "Graphic Design" },
  { name: "Adobe Photoshop", level: 95, type: "Graphic Design" },
  { name: "Sony Vegas Pro", level: 95, type: "Graphic Design" },
  { name: "Blender", level: 95, type: "Graphic Design" },
  { name: "ZBbrush", level: 95, type: "Graphic Design" },
  { name: "Microsoft Word", level: 95, type: "Microsoft Office" },
  { name: "Microsoft Excel", level: 95, type: "Microsoft Office" },
  { name: "Microsoft Powerpoint", level: 95, type: "Microsoft Office" },
  { name: "Data", level: 95, type: "Data" },
];

const skillsByOrganization = skills.reduce((acc, skill) => {
  if (!acc[skill.type]) {
    acc[skill.type] = [];
  }
  acc[skill.type].push(skill);
  return acc;
}, {});

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

      <div className="grid grid-cols-3 gap-20">
        {Object.keys(skillsByOrganization).map((type) => (
          <div className="" key={type}>
            <h1 className="font-bold p-2 text-center bg-red-500 rounded-full">
              {type}
            </h1>

            <div className="p-2 grid grid-cols-2">
              {skillsByOrganization[type].map((skill, index) => (
                <div className="p-2">
                  <h1 key={index}>{skill.name}</h1>
                  {skill.level}
                  <div className={`h-4 w-[100%] rounded-full bg-white `}>
                    <div
                      className={`h-4 rounded-full bg-blue-400`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
