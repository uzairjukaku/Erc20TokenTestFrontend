import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="p-5 shadow-sm shadow-slate-300 flex justify-between ">
        <div className="flex px-5">
          <img src="/logo.png" alt="" srcset="" className="h-16" />
        </div>
        <nav className="flex items-center gap-5">
          <ul className="flex list-none m-0 p-0">
            <li className="mr-5">
              <Link
                className="text-neutral-700 font-bold text-base transition-all hover:text-blue-900  "
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mr-5">
              <Link
                className="text-neutral-700 font-bold text-base transition-all hover:text-blue-900  "
                href="/about"
              >
                About Token
              </Link>
            </li>
            <li className="mr-0">
              <Link
                className="text-neutral-700 font-bold text-base transition-all hover:text-blue-900  "
                href="/giveaway"
              >
                Giveaway
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
