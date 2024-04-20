import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Header({ title }) {
  return (
    <div
      id={title.toLowerCase()}
      // className={`${josefin.className} fade-in bg-slate-800 text-yellow-500 text-2xl mt-50 my-5 p-2 px-7 w-full rounded-lg`}
    ></div>
  );
}
