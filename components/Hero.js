import Image from "next/image";
import React from "react";
import ProgressLine from "./Misc/ProgressLine";
import SimpleSlider from "./Misc/SimpleSlider";
import { HERO_IMAGES } from "@/constants/constants";

export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col-reverse h-fit">
      <div className="lg:w-1/2 px-6 py-10 se:px-10 se:py-20 md:px-20 md:py-40">
        <div>
          <Image
            class="lxr-hero-title"
            src="/luxuri-logo.svg"
            alt=""
            width={500}
            height={500}
          />
          <h2 class="text-3xl sm:text-5xl md:text-7xl py-6">
            REAL ESTATE FUND
          </h2>
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
      <div class="lg:w-1/2 px-4 py-2 se:px-10 se:py-6 md:px-20 md:py-12 flex justify-center items-center">
          <Image
            className=""
            src="/Banner-image11.png"
            alt=""
            width={600}
            height={600}
          ></Image>
        {/* <div class="flex justify-center w-fit">
          <SimpleSlider
            noOfSlides={1}
            autoPlay={true}
            autoPlaySpeed={6000}
            speed={6000}
            infinite={true}
            arrows={true}
          >
            {HERO_IMAGES.map((item) => (
              <div key={item.src}>
              <Image
                class=""
                src={item.src}
                alt=""
                width={600}
                height={600}
              ></Image>
              </div>
            ))}
          </SimpleSlider>
        </div> */}
      </div>
    </div>
  );
}
