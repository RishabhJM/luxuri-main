import React from "react";
import Card from "./Misc/Card";
import Image from "next/image";

export default function Overview() {
  return (
    <div className="my-20 h-fit sm:px-20">
      <div className="text-center">
        <h3 class=" text-4xl sm:text-5xl pb-10">OVERVIEW</h3>
        <p class="pb-32 text-gray-300">
          A private equity fund established to capitalize on realestate
          investment opportunities and the lack of supply inhigh-end Short-Term
          Rental (STR) markets. The strategy is to purchase, renovate, rent, and
          sell a portfolioof high-end real estate assets in the short-term
          rental marketareas, initially in South Florida and Aspen.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-center">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <Image
            height={500}
            width={300}
            class="f4roundimg"
            src="/Acquire-1.png"
            alt=""
          />
          <Image
            height={500}
            width={300}
            class="f4roundimg"
            src="/Design-1.png"
            alt=""
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center">
          <Image
            height={500}
            width={300}
            class="f4roundimg"
            src="/Rent-1.png"
            alt=""
          />
          <Image
            height={500}
            width={300}
            class="f4roundimg"
            src="/hold-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
