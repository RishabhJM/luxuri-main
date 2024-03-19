import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <div class="mx-6 flex flex-col items-center">
      <div className="border-l-[3px] border-[#A7A098] leading-[0.1em] h-[25vh] mt-[10px] mb-[20px]"></div>
      <div className="flex h-[25vh] flex-col items-center justify-center">
        <Link href="https://www.facebook.com/luxurirentals">
          <Image
            src="/facebook.png"
            width={36}
            height={36}
            className="py-6"
          ></Image>
        </Link>
        <Link href="https://x.com/luxuritweets?s=21">
          <Image
            src="/x-symbol.svg"
            width={30}
            height={30}
            className="py-6"
          ></Image>
        </Link>
        <Link href="https://Instagram.com/luxuri">
          <Image
            src="/insta.png"
            width={30}
            height={30}
            className="py-6"
          ></Image>
        </Link>
      </div>
      <div className="border-l-[3px] border-[#A7A098] leading-[0.1em] h-[25vh] mt-[10px] mb-[20px]"></div>
    </div>
  );
}
