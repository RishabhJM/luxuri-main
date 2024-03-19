import Image from "next/image";
import React from "react";

export default function InvestStrat() {
  const boxStyle = "lg:w-1/2 text-[20px] px-4 py-2 se:text-sm se:px-10 se:py-6 md:px-20 md:py-10";
  const rowStyle = "flex py-6 border-style ";
  const rowKey = "text-h4 w-1/3 text-sm se:text-md";
  const rowVal = "text-p4 w-2/3 text-sm se:text-md";
  return (
    <div class="h-fit py-20"  style={{ backgroundImage: `url(/Clippathgroup.svg)`, backgroundSize: "cover",
    backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <div class="">
        <h3 class="text-3xl se:text-5xl text-center pb-10 md:pb-20">
          INVESTMENT STRUCTURE (FUND I)
        </h3>
      </div>
      <div class="flex lg:flex-row flex-col">
        <div class={boxStyle}>
          <div class={rowStyle}>
            <div class={rowKey}>FUND MANAGER</div>
            <div class={rowVal}>Golden Age Luxuri Real Estate LP</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>PARENT (THE FUND)</div>
            <div class={rowVal}>Golden Age Luxuri Real Estate Fund LP</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>EQUITY CAPITAL COMMITMENT</div>
            <div class={rowVal}>$100 million</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>$100 million</div>
            <div class={rowVal}>$100 million</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>FUND MANAGER COMMITMENT</div>
            <div class={rowVal}>$100 million</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>FUND TERM</div>
            <div class={rowVal}>
              5 years (with two consecutive, optional 1-year extensions)
            </div>
          </div>
        </div>
        <div className={boxStyle}>
          <div class={rowStyle}>
            <div class={rowKey}>PROMOTE STRUCTURE</div>
            <div class={rowVal}>
              Preferred Return of 8% to LPs100% return of capital to LPsGP
              Catch-Up to get to the GP Carry percentage of 25%LP/GP split of
              75/25
            </div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>FUND MANAGEMENT FEE</div>
            <div class={rowVal}>2% of all commitments (annual)</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>OTHER FEES</div>
            <div class={rowVal}>See PPM for further details</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>FUND ADMINISTRATION</div>
            <div class={rowVal}>See PPM for further details</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>TAX & AUDIT</div>
            <div class={rowVal}>BDO (Pending Onboarding)</div>
          </div>
          <div class={rowStyle}>
            <div class={rowKey}>LEGAL</div>
            <div class={rowVal}>Goodwin Proctor LLP</div>
          </div>
        </div>
      </div>
          </div>
  );
}
