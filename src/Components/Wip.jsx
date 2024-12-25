import Image from "next/image";
import React from "react";
import WipImage from "../../public/wip.png";

export default function Wip() {
  return (
    <main className="flex flex-col gap-6 mt-20 justify-start items-center">
      <h1 className="text-[#FFB6DB] text-5xl font-bold">Webeo.es</h1>
      <Image
        className="bg-cover max-w-4xl"
        src={WipImage}
        alt="Work in progress"
        loading="lazy"
        quality={100}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <p className="text-[#FFB6DB] text-2xl font-light italic">
        We are working on it.
      </p>
    </main>
  );
}
