import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Social() {
  return (
    <div className="fixed left-10 top-1/2  -translate-y-1/2 text-white mix-blend-difference">
      <div className="flex flex-col w-full h-full p-2 py-5 gap-3">
        <Link className="hover:text-sky-500 font-2xl" href={"/"}>
          <FontAwesomeIcon className="size-5" icon={faTwitter} />
        </Link>
        <Link className="hover:text-sky-500" href={"/"}>
          <FontAwesomeIcon className="size-5" icon={faLinkedin} />
        </Link>
        <Link className="hover:text-sky-500" href={"/"}>
          <FontAwesomeIcon className="size-5" icon={faBehance} />
        </Link>
        <Link className="hover:text-sky-500" href={"/"}>
          <FontAwesomeIcon className="size-5" icon={faGithub} />
        </Link>
      </div>
    </div>
  );
}
