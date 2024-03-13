import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div className="h-screen m-10">
      <h3 className="pb-20 font-italiana text-7xl text-center mb-3">
        Meet the Team
      </h3>
      <div className="flex">
        <div className="w-2/5">
          <div className="bg-[#CED3E6] rounded-2xl mb-16 lg:m-0 md:w-3/4 w-fit">
            <Image
              width={1000}
              height={1000}
              className="relative"
              src="/Testi/Group60.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-3/5">
          <h3 className="text-6xl font-italiana mb-4">JONATHAN CAMPAU</h3>
          <span className="text-[#fad49c] font-semibold text-3xl">OWNER / OPERATOR</span>
          <p className="text-lg py-4">
            Jonathan Campau is an entrepreneur, real estate investor,customer
            service expert, founder and CEO of Luxuri®. Campaubegan his
            hospitality training during his undergraduateprogram in South
            Florida, by learning from the best: The HardRock Hotels and casinos.
            Post graduation, he moved to KansasCity where he worked for a hedge
            fund as a new businessanalyst while completing an MBA in Corporate
            Finance.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                width={100}
                height={100}
                className="rounded-full mr-6 f4roundimg2"
                src="/Rectangle-52.png"
                alt=""
              />
              <Image
                width={100}
                height={100}
                className="rounded-full mr-6 f4roundimg2"
                src="/Rectangle-53.jpg"
                alt=""
              />
              <Image
                width={100}
                height={100}
                className="rounded-full mr-6 f4roundimg2"
                src="/Rectangle-54.jpg"
                alt=""
              />
            </div>
            <div className="rightside02">
              <div className="arrowbutoncover flex">
                <Image
                  width={50}
                  height={50}
                  className="cursor-pointer"
                  src="/Testi/noun-arrow-down-24249633.svg"
                  alt=""
                />
                <Image
                  width={50}
                  height={50}
                  className="cursor-pointer"
                  src="/Testi/noun-arrow-down-24249634.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
