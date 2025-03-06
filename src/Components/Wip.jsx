import Image from "next/image";
import React from "react";
import WorkingImage from "../../public/working.png";

export default function Wip() {
  return (
    <>
      <main className="mx-4 flex flex-col mt-20 justify-start items-center">
        <h1 className="text-[#ffffff] text-5xl font-bold mb-20">Webeo.es</h1>
        <Image
          className="bg-cover max-w-xl mb-10"
          src={WorkingImage}
          alt="Work in progress"
          loading="lazy"
          quality={100}
          style={{
            width: "100%",
            height: "auto",
          }}

        />
        <p className="text-[#ffffff] text-2xl font-light italic">
          We are working on it.
        </p>
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
