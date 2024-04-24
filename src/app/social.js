import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faLinkedinIn, faBehance, faGithub } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Social() {
  return (
    <div>
      <div className="fixed left-10 bottom-44 text-text-light mix-blend-difference">
      <div className="flex flex-col w-full h-full p-2 py-5 gap-3">
        <Link className="hover:text-red-400" href={"/"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faXTwitter} />
        </Link>
        <Link className="hover:text-red-400" href={"/"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faLinkedinIn} />
        </Link>
        <Link className="hover:text-red-400" href={"/"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faBehance} />
        </Link>
        <Link className="hover:text-red-400" href={"/"}>
          <FontAwesomeIcon className="size-5 hover:translate-y-[-3px]" icon={faGithub} />
        </Link>
      </div>
      
    </div>
    <div className="fixed border h-40 left-14 bottom-0 border-text-light mix-blend-difference"></div>

    </div>
  );
}

