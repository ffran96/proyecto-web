import Link from "next/link";
import React from "react";

export default function Dropdown({ HandleClick, setHandleClick, Links }) {
  return (
    <>
      <div className="absolute inset-0 bg-rose-600 xl:hidden">
        <ul className="h-full flex flex-col justify-center items-center gap-4">
          {Links.map(({ id, name, URL }) => (
            <li
              className="relative w-44 h-12  font-medium text-white border-[1px]"
              key={id}
            >
              <Link
                className="flex absolute inset-0 items-center justify-center"
                onClick={() => setHandleClick(!HandleClick)}
                href={URL}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
