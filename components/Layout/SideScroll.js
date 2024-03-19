import Image from "next/image";
import Link from "next/link";

export default function SideScroll() {
  return (
    <div class="mx-6">
      <div className="border-l-[3px] border-[#A7A098] leading-[0.1em] h-[79vh] mt-[10px] mb-[20px]"></div>

      {/* <div className="flex flex-col justify-center">
        <Link href="https://www.facebook.com/luxurirentals">
          <Image src="/facebook.png" width={35} height={35} className="py-6"></Image>
        </Link>
        <Link href="https://x.com/luxuritweets?s=21">
          <Image src="/x-symbol.svg" width={30} height={30} className="py-6"></Image>
        </Link>
        <Link href="https://Instagram.com/luxuri">
          <Image src="/insta.png" width={30} height={30} className="py-6"></Image>
        </Link>
      </div> */}
      {/* <div className="border-l-2 border-gray h-[25vh] w-0 relative left-3"></div> */}
    </div>
  );
}
