import Image from "next/image";
import React from "react";

export default function DebtStr() {
  const tableStyle = "flex py-6 border-style";
  return (
    <div className="h-fit m-2 md:m-10 py-20 flex lg:flex-row flex-col">
      <div className="lg:w-1/2 se:text-sm px-4 py-4 se:px-10 se:py-6 md:px-20 md:py-10">
        <h4 className="text-3xl sm:text-5xl text-center pb-10 md:pb-20">DEBT STRUCTURE (FUND I)</h4>
        <div className="">
          <p className="text-gray-300 pb-10">
            It is the intent of the manager to utilize a revolver that will be
            used and paid down at the end of the life of the fund.
          </p>
          <div className={tableStyle}>
            <div className="text-h4">TARGET LOAN TO VALUE</div>
            <div className="text-p4">70 / 30</div>
          </div>
          <div className={tableStyle}>
            <div className="text-h4">TARGET LOAN TERM</div>
            <div className="text-p4">Revolver</div>
          </div>
          <div className={tableStyle}>
            <div className="text-h4">TARGET RATE</div>
            <div className="text-p4">7.5%</div>
          </div>
          <div className={tableStyle}>
            <div className="text-h4">TARGET LOAN TYPE</div>
            <div className="text-p4">Non - recourse</div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 px-4 py-4 se:px-10 se:py-6 md:px-20 md:py-10">
        <div>
          <h4 className="pb-4 text-xl se:text-3xl">PRELIMINARY RETURN PROJECTIONS</h4>
          <div className="flex py-2 items-center">
            <div className="number-gol text-5xl se:text-7xl font-italiana pr-4">25%</div>
            <div className="">
              PROJECTED <br />
              INVESTOR NET IRR
            </div>
          </div>
          <div className="py-6">
            <div className="text-luxuri-golden text-xl">PROFORMA MAJOR ASSUMPTIONS</div>
            <Image className="w-full object-" width={800} height={800} src="/Permorma-Major.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
