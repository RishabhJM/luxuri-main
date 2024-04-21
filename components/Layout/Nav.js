import { NAV_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const isActive = (href) => router.pathname.includes(href);
  return (
    <div className="w-screen flex lg:flex-row flex-col justify-center py-4 px-8 bg-black bg-opacity-80 text-white fixed z-10">
      <div className="lg:w-fit w-auto flex justify-between items-center">
        <div className="items-center lg:absolute left-8">
          <Image src="/luxuri-logo.svg" width={150} height={150}></Image>
        </div>
        {!openNav && (
          <div
            className={"items-center cursor-pointer lg:hidden"}
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
            className={"items-center inline-block cursor-pointer lg:hidden "}
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
              <Link
                href={item.href}
                key={item.key}
                className={
                  isActive(item.href) ? "p-4 text-[#FD9E0F]" : "p-4 text-white hover:text-[#FD9E0F]"
                }
                onClick={() => setOpenNav(!openNav)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <nav className="w-1/2 hidden lg:flex  justify-between text-md">
        {NAV_LINKS.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className={
              isActive(item.href) ? "p-4 text-[#FD9E0F]" : "p-4 text-white hover:text-[#FD9E0F]"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* <div>
        <Image
          className="hidden lg:block"
          src="/Lets-Talk-business.png"
          width={75}
          height={75}
        ></Image>
      </div> */}
    </div>
  );
}
