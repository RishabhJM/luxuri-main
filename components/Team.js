import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div
      className="h-fit px-10 py-20"
      style={{
        backgroundImage: `url(/background-34.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <h3 className="pb-10 se:pb-20 font-italiana text-5xl md:text-7xl mb-3 text-center">
        Meet the Team
      </h3>
      <div className="flex lg:flex-row flex-col justify-center">
        <div className="lg:w-2/5 flex justify-center">
          <div className="bg-[#CED3E6] rounded-2xl mb-16 lg:m-0 md:w-3/4 w-fit">
            <Image
              width={2000}
              height={2000}
              className="relative"
              src="/Testi/Group60.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-3/5">
          <h3 className="text-4xl sm:text-6xl font-italiana mb-4">
            JONATHAN CAMPAU
          </h3>
          <span className="text-[#fad49c] font-semibold text-xl sm:text-3xl">
            OWNER / OPERATOR
          </span>
          <p className="text-md sm:text-lg py-4">
            Jonathan Campau is an entrepreneur, real estate investor,customer
            service expert, founder and CEO of Luxuri®. Campaubegan his
            hospitality training during his undergraduateprogram in South
            Florida, by learning from the best: The HardRock Hotels and casinos.
            Post graduation, he moved to KansasCity where he worked for a hedge
            fund as a new businessanalyst while completing an MBA in Corporate
            Finance.
          </p>
          <div className="flex sm:flex-row flex-col justify-between items-center">
            <div className="flex mb-10">
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
                  width={70}
                  height={70}
                  className="cursor-pointer"
                  src="/Testi/noun-arrow-down-24249633.svg"
                  alt=""
                />
                <Image
                  width={70}
                  height={70}
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
