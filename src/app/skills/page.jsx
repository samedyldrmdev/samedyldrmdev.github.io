import HeaderTitle from "../headerTitle";
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

export default function Skills() {
  return (
    <div className="min-h-screen p-40 flex justify-center items-center">
      <div className="grid grid-cols-3 gap-20">
        {Object.keys(skillsByOrganization).map((type) => (
          <div className="" key={type}>
            <h1 className="font-bold p-2 text-center text-white bg-blue-500 rounded-full">
              {type}
            </h1>

            <div className="p-2 grid grid-cols-2">
              {skillsByOrganization[type].map((skill, index) => (
                <div className="p-2">
                  <h1 key={index}>{skill.name}</h1>
                  <div
                    className={`h-2 w-[100%] rounded-full bg-black shadow-sm shadow-blue-500  `}
                  >
                    <div
                      className={`h-2 rounded-full bg-text-light`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <HeaderTitle title="Skills" /> */}
    </div>
  );
}
