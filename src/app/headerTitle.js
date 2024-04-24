
import { Merriweather, Open_Sans, Oswald, Kanit, Josefin_Sans, IM_Fell_Great_Primer_SC, Karantina, Text_Me_One } from "next/font/google";

const headerTitleFont = Text_Me_One({ subsets: ["latin"], weight: ["400"] });

export default function HeaderTitle({ title }) {
  return (
    <div className="text-text-light mix-blend-difference relative">
    <div className="absolute mt-24 right-4">
      <div className="transform -rotate-90 flex h-96 w-96 text-end justify-end items-end ">
        <h1 className={`${headerTitleFont.className}`}>{`/${title.toUpperCase() }`}</h1>
      </div>
    </div>
  </div>
  );
}

// ${headerTitleFont.className}
