import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <div className="m-10 h-screen flex items-center">
      <div className="w-2/5 px-20">
        <Image width={400} height={400} src="/LUXUTRI_ FUTURE_GROWTH.svg" alt="" />

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
      <div className="w-3/5">
        <div className="flo-img3 t-cen">
          <Image width={900} height={900} src="/MAP.svg" alt="" />
        </div>
        <div className="">
          <div className="flex mb-4">
            <div className="col-btn">
              <button className="btn-style-1">LONDON</button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">PARIS</button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">HAMPTONS</button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">DUBAI</button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">CAPRI</button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">POSITANO</button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">CANNES</button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">BAHAMAS</button>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="col-btn">
              <button className="btn-style-1">ST TROPEZ </button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">MYKONOS </button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">MONOCO </button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">SARDINIA </button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">CAPE TOWN </button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">IBIZA </button>
            </div>
            <div className="col-btn">
              <button className="btn-style-1">ZEDDA (SAUDI ARABIA)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
