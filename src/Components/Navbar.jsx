"use client";

import React, { useState } from "react";
import Link from "next/link";
import Links from "../Data/Links";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropwdown";
import Logo from "./Logo";

export default function Navbar() {
  const [HandleClick, setHandleClick] = useState(false);
  const pathname = usePathname();
  return (
    <header className="bg-rose-600 shadow-sm shadow-rose-300">
      <nav className="mx-8 xl:m-auto max-w-7xl  flex justify-between items-center">
        <div className="text-white py-4 px-5">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div>
          <ul className="hidden xl:flex visible">
            {Links.map(({ id, name, URL }) => {
              const isActive = pathname.startsWith(URL);
              return (
                <li key={id}>
                  <Link
                    className={
                      isActive
                        ? "relative py-4 px-5 cursor-pointer text-white hover:opacity-80 hover:transition-all delay-150 underline decoration-yellow-300 decoration-4 underline-offset-8"
                        : "relative py-4 px-5 cursor-pointer text-white hover:opacity-80 hover:transition-all delay-150"
                    }
                    href={URL}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className="relative xl:hidden cursor-pointer p-3 overflow-hidden z-50"
            onClick={() => setHandleClick(!HandleClick)}
          >
            <FontAwesomeIcon
              className="size-6  text-white"
              icon={HandleClick ? faXmark : faBars}
            />
          </div>
        </div>
        <Dropdown
          Links={Links}
          HandleClick={HandleClick}
          setHandleClick={setHandleClick}
        />
      </nav>
    </header>
  );
}
