import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Hello, I'm Samed Yıldırım!
        </h1>
        <p className="text-lg mt-4">
          Bu portfolyomda yaptığım çalışmaları görebilirsiniz.
        </p>

        <div class="icon-scroll"></div>
      </div>
  );
}
