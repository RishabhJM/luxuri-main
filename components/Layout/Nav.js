import { NAV_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col justify-between py-6 px-10 bg-opacity-0 text-white">
      <div className="lg:w-fit w-auto flex justify-between items-center">
        <div className="items-center">
          <Image src="/luxuri-logo.svg" width={150} height={150}></Image>
        </div>
        {!openNav && (
          <div
            className={"cursor-pointer lg:hidden"}
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
        {openNav && (
          <div
            className={"inline-block cursor-pointer lg:hidden"}
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      {openNav && (
        <div className="lg:hidden w-auto flex justify-center text-center">
          <nav className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <Link href={item.href} key={item.key} className="p-4">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <div className="flex lg:text-xl">
        <nav className="hidden lg:flex justify-end">
          {NAV_LINKS.map((item) => (
            <Link href={item.href} key={item.key} className="p-4">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <Image
          className="hidden lg:block"
          src="/Lets-Talk-business.png"
          width={75}
          height={75}
        ></Image>
      </div>
    </div>
  );
}
