import { TEAM_DATA } from "@/constants/constants";
import Image from "next/image";
import React, { useState } from "react";

export default function Team() {
  const [person, setPerson] = useState(0);
  function nextPerson() {
    if (person < TEAM_DATA.length - 1) {
      setPerson(person + 1);
      setShowMore(false);
    }else{
      setPerson(0);
    }
  }
  function prevPerson() {
    if (person > 0) {
      setPerson(person - 1);
      setShowMore(false);
    }else{
      setPerson(TEAM_DATA.length - 1);
    }
  }
  return (
    <div
      className="h-fit px-4 se:px-10 md:px-20 py-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),linear-gradient(to top, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),url(/background-34.jpg)`,
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
          <div className="bg-[#CED3E6] rounded-2xl h-fit mb-16 lg:m-0 md:w-3/4 w-fit">
            <Image
              width={2000}
              height={2000}
              className="relative"
              src={TEAM_DATA[person].src}
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-3/5">
          <h3 className="text-4xl sm:text-6xl font-italiana mb-4">
            {TEAM_DATA[person].name}
          </h3>
          <span className="text-[#fad49c] font-semibold text-xl sm:text-3xl">
            {TEAM_DATA[person].desg}
          </span>
          <p className="text-md sm:text-lg py-4 overflow-scroll h-[200px] my-4 text-justify pr-4">
          {TEAM_DATA[person].info}
          </p>
          <div className="flex sm:flex-row flex-col justify-between items-center">
            <div className="flex mb-10 overflow-scroll mr-4">
            {/* <Image
                width={96}
                height={95}
                className="rounded-full mr-6 f4roundimg2"
                src="/johny.png"
                alt=""
                onClick={() => {
                  setPerson(0);
                }}
              /> */}
              <Image
                width={96}
                height={95}
                className="rounded-full mr-6 f4roundimg2"
                src="/cmack.png"
                alt=""
                onClick={() => {
                  setPerson(1);
                }}
              />
              <Image
                width={96}
                height={95}
                className="rounded-full mr-6 f4roundimg2"
                src="/andre.png"
                alt=""
                onClick={() => {
                  setPerson(2);
                }}
              />
              <Image
                width={96}
                height={95}
                className="rounded-full mr-6 f4roundimg2"
                src="/larry.png"
                alt=""
                onClick={() => {
                  setPerson(3);
                }}
              />
              <Image
                width={96}
                height={95}
                className="rounded-full mr-6 f4roundimg2"
                src="/ordori.png"
                alt=""
                onClick={() => {
                  setPerson(4);
                }}
              />
              <Image
                width={96}
                height={95}
                className="rounded-full mr-6 f4roundimg2"
                src="/Rectangle-53.jpg"
                alt=""
                onClick={() => {
                  setPerson(5);
                }}
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
                  onClick={() => {
                    prevPerson();
                  }}
                />
                <Image
                  width={70}
                  height={70}
                  className="cursor-pointer"
                  src="/Testi/noun-arrow-down-24249634.svg"
                  alt=""
                  onClick={() => {
                    nextPerson();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
