import Image from "next/image";
import React, { useState } from "react";

export default function Map() {
  const colBtn = "mt-[10px] mr-[20px] se:text-lg text-xs";
  const [map,setMap] = useState("/MAP.svg");
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
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>LONDON</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP (2).svg")}}>PARIS</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP (3).svg")}}>HAMPTONS</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP (4).svg")}}>DUBAI</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP (5).svg")}}>CAPRI</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP (6).svg")}}>POSITANO</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>CANNES</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>BAHAMAS</button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>ST TROPEZ </button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>MYKONOS </button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>MONOCO </button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>SARDINIA </button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>CAPE TOWN </button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>IBIZA </button>
            </div>
            <div className={colBtn}>
              <button className="btn-style-1" onClick={() => {setMap("/MAP-l (1).svg")}}>ZEDDA (SAUDI ARABIA)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
