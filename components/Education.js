import Image from "next/image";
import React from "react";

export default function Education() {
  return (
    <div
      class=" py-2 se:text-sm px-4 se:px-10 md:px-20 se:py-6  md:py-10 h-fit flex lg:flex-row flex-col-reverse"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),linear-gradient(to top, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),url(/Frame-91.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="lg:w-1/2 py-4  se:py-6 md:py-10 flex flex-col justify-center">
        <h5 class="pb-10 text-xl se:text-3xl font-semibold">
          Strong Luxury Property Markets in South Florida and Aspen
        </h5>

        <div class="pb-10 px-6">
          <ul class="list-disc">
            <li class="p-style-1">
              Wealth migration from high-cost states (e.g., NY, CA)
            </li>
            <li class="p-style-1">International home buyers boosting demand</li>
            <li class="p-style-1">
              Natural demand due to climate and topography
            </li>
            <li class="p-style-1">Limited inventory in premium locations</li>
          </ul>
        </div>

        <h5 class="pb-10 text-xl se:text-3xl font-semibold">
          Robust Demand for Short-Term Rentals in Southern Florida and Aspen
        </h5>

        <div class="pb-10 px-6">
          <ul class="list-disc">
            <li class="p-style-1">
              Both have reputations as ultra high end destinations for
              vacationers
            </li>
            <li class="p-style-1">
              The ability to work from home has lengthened weekend trips
            </li>
            <li class="p-style-1">
              A shortage of hotels has introduced more vacationers to short term
              rentals
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <div className="flo-img">
          <Image width={800} height={800} src="/asset90.png" alt="" />
        </div>
      </div>
    </div>
  );
}
