import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Header({ title }) {
  return (
    <div id={title.toLowerCase()}>
      
      </div>

  );
}
