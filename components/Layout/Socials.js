import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <div className="md:flex flex-col left-3 top-1/2 transform -translate-y-1/2 hidden z-40 fixed justify-center items-center">
      <div className="border-l-[1px] border-[#A7A098] leading-[0.1em] h-[30vh] mb-8"></div>
      <div className="socials-pane flex flex-col items-center justify-between">
        <Link href="https://www.facebook.com/luxurirentals">
          <div className="w-[30px] h-[30px] relative my-6">
            <Image src="/facebook.png" fill></Image>
          </div>
        </Link>
        <Link href="https://x.com/luxuritweets?s=21">
          <div className="w-[20px] h-[20px] relative my-2">
            <Image src="/x-symbol.svg" fill></Image>
          </div>
        </Link>
        <Link href="https://Instagram.com/luxuri">
          <div className="w-[20px] h-[20px] relative my-6">
            <Image src="/insta.png" fill></Image>
          </div>
        </Link>
      </div>
      <div className="border-l-[1px] border-[#A7A098] leading-[0.1em] h-[30vh] mt-8"></div>
    </div>
  );
}
