import Image from "next/image";
import React from "react";
import WorkingImage from "../../public/working.png";

export default function Wip() {
  return (
    <>
      <main className="[&>div]:mx-10  flex flex-col gap-4 py-10 justify-start items-center bg-[#ff5a5a] h-dvh">
        <div className="h-[10%]">
          <h1 className="text-[#ffffff] text-5xl font-bold mb-20">Webeo.es</h1>
        </div>
        <div className="h-[50%] w-auto">
        <Image
          className="bg-cover"
          src={WorkingImage}
          alt="Work in progress"
          loading="lazy"
          quality={100}
          style={{
            height: "100%",
            width: "auto",
          }}
        />

        </div>
        <div className="h-[10%]">

        <p className="text-[#ffffff] text-2xl font-light italic">
          We are working on it.
        </p>

        </div>
      </main>
      <footer className="bg-[#00000069] bottom-0 fixed w-dvw h-14 flex backdrop-blur-lg">
        <span className="flex gap-1 justify-center items-center w-full">
          👋
          <a
            className="justify-center items-center hover:underline text-[#ffffff] font-semibold"
            href="mailto:hola@webeo.es"
          >
            hola@webeo.es
          </a>
        </span>
      </footer>
    </>
  );
}
