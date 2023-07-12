import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

import { Cart } from "./Cart";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-between items-center md:flex-row md:justify-start shadow-xl sticky top-0 z-30 bg-white">
      {/* Navbar */}
      <div className="logo mx-4 my-2 md:my-4">
        <Link href={"/"}>
          <Image src="/favicon.ico" width={40} height={40} alt="logo" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-5 font-bold md:text-xl">
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/jeans"}>
            <li>Jeans</li>
          </Link>
          <Link href={"/suits"}>
            <li>Suits</li>
          </Link>
        </ul>
      </div>

      <Link href={"/"}>
        <CgProfile className="absolute right-12 md:text-4xl top-4 font-bold mx-5" />
      </Link>

      <Cart />
    </div>
  );
}
