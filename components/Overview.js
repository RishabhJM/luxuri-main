import React from "react";
import Card from "./Misc/Card";
import Image from "next/image";

export default function Overview() {
  const imageClass = "relative h-[250px] sm:h-[400px] 2xl:h-[500px] w-[200px] sm:w-[300px] lg:w-[250px] 2xl:w-[350px]";
  return (
    <div className="my-20 h-fit sm:px-20">
      <div className="text-center">
        <h3 class=" text-4xl sm:text-5xl pb-10">OVERVIEW</h3>
        <p class="pb-20 md:pb-32 text-gray-300 px-4">
          A private equity fund established to capitalize on realestate
          investment opportunities and the lack of supply inhigh-end Short-Term
          Rental (STR) markets. The strategy is to purchase, renovate, rent, and
          sell a portfolioof high-end real estate assets in the short-term
          rental marketareas, initially in South Florida and Aspen.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-center">
        <div className="flex flex-row justify-center items-center">
          <div className={imageClass}>
            <Image class="f4roundimg" src="/Acquire-1.png" fill alt="" />
          </div>
          <div className={imageClass}>
            <Image class="f4roundimg" src="/Design-1.png" fill alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className={imageClass}>
            <Image class="f4roundimg" src="/Rent-1.png" fill alt="" />
          </div>
          <div className={imageClass}>
            <Image
              class="f4roundimg"
              src="/hold-1.png"
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
