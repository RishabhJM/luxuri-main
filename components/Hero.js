import Image from "next/image";
import React from "react";
import ProgressLine from "./Misc/ProgressLine";
import SimpleSlider from "./Misc/SimpleSlider";
import { HERO_IMAGES } from "@/constants/constants";
import SideScroll from "./Layout/SideScroll";
import Socials from "./Layout/Socials";

export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col-reverse w-full">
      <div className="lg:w-1/2 px-6 py-10 se:px-10 se:py-20 md:px-32 md:py-40 md:pt-60">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative w-[250px] h-[30px] md:w-[350px] md:h-[100px]">
            <Image
              class="lxr-hero-title"
              src="/luxuri-logo.svg"
              alt=""
              fill
            />
          </div>

          <h2 class="text-2xl sm:text-4xl md:text-7xl py-">
            Real Estate Fund
          </h2>
        </div>
        <ProgressLine
          label="DEBT"
          amount="$233M"
          backgroundColor="lightblue"
          visualParts={[
            {
              percentage: "100%",
              color: "#BF7500",
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
              color: "#BF7500",
            },
          ]}
        />
      </div>
      <div class="lg:w-1/2 px-4 py-2 se:px-10 se:py-6 md:px-20 md:py-12">
        <SimpleSlider
          dots={false}
          noOfSlides={1}
          autoPlay={true}
          infinite={true}
          arrows={false}
          speed={3000}
          autoPlaySpeed={7000}
          lgSlides={1}
        >
          {HERO_IMAGES.map((t) => (
            <div
              className="relative w-[200px] h-[300px] md:w-[600px] md:h-[600px] flo-img"
              key={t}
            >
              <Image
                src={t.src}
                className="object-cover rounded-3xl"
                fill
                alt=""
              ></Image>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
    // <div className="flex justify-between w-[80vw]">
    //   {/* <Socials></Socials> */}

    //   <SideScroll></SideScroll>
    // </div>
  );
}
