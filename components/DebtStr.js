import Image from "next/image";
import React from "react";

export default function DebtStr() {
  const tableStyle = "px-4 py-6 md:py-10 se:px-10 md:px-20 flex border-style";
  const rowKey = "text-h4 w-2/5 text-sm se:text-md";
  const rowVal = "text-p4 w-3/5 text-sm se:text-md";
  return (
    <div
      className="h-fit sm:px-20 py-20 flex lg:flex-row flex-col"
      style={{
        backgroundImage: `url(/Clippathgroup.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lg:w-1/2 se:text-sm px-2 py-4 se:px-6 se:py-6 md:px-10 md:py-10">
        <h4 className="text-xl se:text-3xl pb-10 md:pb-10 font-semibold">
          DEBT STRUCTURE (FUND I)
        </h4>
        <div className="">
          <p className="text-gray-300 pb-10 text-sm se:text-md">
            It is the intent of the manager to utilize a revolver that will be
            used and paid down at the end of the life of the fund.
          </p>
          <div className={tableStyle}>
            <div className={rowKey}>TARGET LOAN TO VALUE</div>
            <div className={rowVal}>70 / 30</div>
          </div>
          <div className={tableStyle}>
            <div className={rowKey}>TARGET LOAN TERM</div>
            <div className={rowVal}>Revolver</div>
          </div>
          <div className={tableStyle}>
            <div className={rowKey}>TARGET RATE</div>
            <div className={rowVal}>7.5%</div>
          </div>
          <div className={tableStyle}>
            <div className={rowKey}>TARGET LOAN TYPE</div>
            <div className={rowVal}>Non - recourse</div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 px-2 py-4 se:px-6 se:py-6 md:px-10 md:py-10">
        <div>
          <h4 className="pb-4 text-xl se:text-3xl font-semibold">
            PRELIMINARY RETURN PROJECTIONS
          </h4>
          <div className="flex py-2 items-center">
            <div className="number-gol text-5xl se:text-7xl font-italiana pr-4">
              25%
            </div>
            <div className="">
              PROJECTED <br />
              INVESTOR NET IRR
            </div>
          </div>
          <div className="py-6">
            <div className="text-[#9D855F] text-lg se:text-xl font-bold pb-4 se:pb-10">
              PROFORMA MAJOR ASSUMPTIONS
            </div>
            <Image
              className="w-full object-"
              width={800}
              height={800}
              src="/Permorma-Major.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
