import Image from "next/image";
import React from "react";
import ProgressLine from "./Misc/ProgressLine";

export default function Hero() {
  return (
    <div className="md:flex-row flex flex-col h-fit">
      <div className="md:w-1/2 px-20 py-40">
        <div>
          <Image
            class="lxr-hero-title"
            src="/luxuri-logo.svg"
            alt=""
            width={500}
            height={500}
          />
          <h2 class="text-7xl py-6">REAL ESTATE FUND</h2>
        </div>
        <ProgressLine
          label="DEBT"
          amount="$233M"
          backgroundColor="lightblue"
          visualParts={[
            {
              percentage: "100%",
              color: "#E49E34",
            },
          ]}
        />
        <ProgressLine
          label="EQUITY"
          amount="$100M"
          backgroundColor="lightblue"
          visualParts={[
            {
              percentage: "60%",
              color: "#E49E34",
            },
          ]}
        />
      </div>
      <div class="md:w-1/2 px-20 py-12">
          <div class="carousel">
            <Image
              class=" herosliderimg mySlides"
              src="/Banner-image11.png"
              alt=""
              width={600}
              height={600}
            ></Image>
            {/* <img
              class="topslider herosliderimg mySlides"
              src="assets/img/Banner-image22.png"
              alt=""
            ></img> */}
          </div>
      </div>
    </div>
  );
}
