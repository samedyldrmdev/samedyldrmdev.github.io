import Image from "next/image";
import HeaderTitle from "../headerTitle";

export default function About() {
  return (
    <div className="h-screen bg-background-dark text-white p-40">
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
      {/* <HeaderTitle title="About" /> */}
    </div>
  );
}
