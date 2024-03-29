import Link from "next/link";
import React from "react";

export default function Dropdown({ HandleClick, setHandleClick, Links }) {
  return (
    <>
      {HandleClick && (
        <div className="absolute inset-0 bg-rose-600">
          <ul className="flex flex-col h-full justify-center items-center ">
            {Links.map(({ id, name, URL }) => (
              <li className="p-7 font-semibold text-white" key={id}>
                <Link onClick={() => setHandleClick(!HandleClick)} href={URL}>
                  <span className="">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
