import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-full w-full fixed right-0 bottom-0 flex justify-center items-center bg-background-dark text-background-dark z-50">
      <div className="py-36 px-96 bg-background-light/90 rounded-3xl flex flex-col justify-center items-center text-center ">
        <h1 className="font-bold text-9xl p-12">404!</h1>
        <h2 className="text-2xl">Oops! You're a Bit Lost! 🚀</h2>
        <p>
          Sorry, we couldn't find the page you're looking for. <br /> Looks like
          you're a bit lost! <br /> What would you like to do?
          <br />
          <br />
          Here's a magical formula to find your way back: <br />{" "}
        </p>
        <div className="m-4">
          <Link
            className="bg-text-light text-black p-2 rounded-lg hover:bg-background-dark hover:text-white hover:shadow-black hover:shadow-lg"
            href="/"
          >
            Go Back to Home! 🏠
          </Link>
        </div>
        <div className="fixed invert -z-10 opacity-50">
          <Image
          className="pointer-events-none"
            src={"/images/notFoundBg.gif"}
            width={1920}
            height={1080}
          ></Image>
        </div>
      </div>
    </div>
  );
}
