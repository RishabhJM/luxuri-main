import { CITIES } from "@/constants/constants";
import { id_ID } from "@faker-js/faker";
import Image from "next/image";
import React, { useState } from "react";

export default function Map() {
  const colBtn = "mt-[10px] mr-[20px] se:text-lg text-xs";
  const [map, setMap] = useState("/MAP.svg");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    console.log(id);
    setActiveButton(id);
    setMap(`/MAP (${id + 1}).svg`);
    console.log(map);
  };
  return (
    <div className="p-10 h-fit flex lg:flex-row flex-col items-center">
      <div className="lg:w-2/5 px-4 md:px-20">
        <Image
          width={400}
          height={400}
          src="/LUXUTRI_ FUTURE_GROWTH.svg"
          alt=""
        />

        <h5 className="mt-10 text-3xl font-semibold">FUND II & III</h5>
        <h5 className="text-3xl">ADDITIONAL GEOGRAPHIES</h5>

        <div>
          <p className="py-4 text-gray-300">
            Luxuri® already has access to bookings across the globe. As Luxuri®
            continues to expand internationally, Golden Age will partner with
            them to launch additional funds.
          </p>
        </div>
      </div>
      <div className="w-screen lg:w-3/5">
        <div
          className="flo-img3 t-cen"
          style={{
            backgroundImage: `url(/Clippathgroup.svg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-screen h-[200px] sm:w-full sm:h-[500px]">
            <Image fill src={map} alt="" />
          </div>
        </div>
        <div className="px-4">
          <div className="flex overflow-x-scroll px-2 no-scrollbar sm:flex-wrap mb-4">
            {CITIES.map((city, index) => (
              <div key={index} className={colBtn}>
                <button
                  id={index}
                  className={
                    activeButton === index
                      ? "bg-[#b56c00] py-[4px] px-[12px] text-white rounded-xl text-base"
                      : "bg-[#181818] py-[4px] px-[12px] text-white rounded-xl text-base hover:bg-[#b56c00]"
                  }
                  onClick={() => handleButtonClick(index)}
                >
                  {city}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
