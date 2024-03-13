import Image from "next/image";
import React from "react";

export default function Education() {
  return (
    <div class="m-10 h-screen flex">
      <div class="w-1/3 ml-20">
        <h5 class="pb-10 text-3xl font-semibold">
          Strong Luxury Property Markets in South Florida and Aspen
        </h5>

        <div class="pb-10 px-6">
          <ul class="list-disc">
            <li class="">
              Wealth migration from high-cost states (e.g., NY, CA)
            </li>
            <li class="">International home buyers boosting demand</li>
            <li class="">
              Natural demand due to climate and topography
            </li>
            <li class="">Limited inventory in premium locations</li>
          </ul>
        </div>

        <h5 class="pb-10 text-3xl font-semibold">
          Robust Demand for Short-Term Rentals in Southern Florida and Aspen
        </h5>

        <div>
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
      <div className="w-2/3 pl-20">
        <div className="flo-img">
          <Image width={800} height={800} src="/asset90.png" alt="" />
        </div>
      </div>
    </div>
  );
}
