import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <div class="mx-6 flex flex-col items-center">
      <div className="border-l-[3px] border-[#A7A098] leading-[0.1em] h-[90vh] my-8"></div>
      <div className="flex bg-black flex-col items-center justify-between absolute left-[12px] top-[40vh]">
        <Link href="https://www.facebook.com/luxurirentals">
          <div className="w-[30px] h-[30px] relative my-6">
            <Image src="/facebook.png" fill ></Image>
          </div>
        </Link>
        <Link href="https://x.com/luxuritweets?s=21">
          <div className="w-[20px] h-[20px] relative my-2">
            <Image src="/x-symbol.svg" fill ></Image>
          </div>
        </Link>
        <Link href="https://Instagram.com/luxuri">
          <div className="w-[20px] h-[20px] relative my-6">
            <Image src="/insta.png" fill ></Image>
          </div>
        </Link>
      </div>
      {/* <div className="border-l-[3px] border-[#A7A098] leading-[0.1em] h-[25vh] mt-[10px] mb-[20px]"></div> */}
    </div>
  );
}
