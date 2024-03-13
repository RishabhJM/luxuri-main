import React from "react";

export default function InvestStrat() {
  const boxStyle = "lg:w-1/2 text-[20px] px-4 py-2 se:text-sm se:px-10 se:py-6 md:px-20 md:py-10";
  const rowStyle = "flex se:flex-row flex-col py-6 border-style ";
  return (
    <div class="h-fit m-2 md:m-10 py-20">
      <div class="">
        <h3 class="text-3xl se:text-5xl md:text-7xl text-center pb-10 md:pb-20">
          INVESTMENT STRUCTURE (FUND I)
        </h3>
      </div>
      <div class="flex lg:flex-row flex-col">
        <div class={boxStyle}>
          <div class={rowStyle}>
            <div class="text-h4">FUND MANAGER</div>
            <div class="text-p4">Golden Age Luxuri Real Estate LP</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">PARENT (THE FUND)</div>
            <div class="text-p4">Golden Age Luxuri Real Estate Fund LP</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">EQUITY CAPITAL COMMITMENT</div>
            <div class="text-p4">$100 million</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">$100 million</div>
            <div class="text-p4">$100 million</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">FUND MANAGER COMMITMENT</div>
            <div class="text-p4">$100 million</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">FUND TERM</div>
            <div class="text-p4">
              5 years (with two consecutive, optional 1-year extensions)
            </div>
          </div>
        </div>
        <div className={boxStyle}>
          <div class={rowStyle}>
            <div class="text-h4">PROMOTE STRUCTURE</div>
            <div class="text-p4">
              Preferred Return of 8% to LPs100% return of capital to LPsGP
              Catch-Up to get to the GP Carry percentage of 25%LP/GP split of
              75/25
            </div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">FUND MANAGEMENT FEE</div>
            <div class="text-p4">2% of all commitments (annual)</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">OTHER FEES</div>
            <div class="text-p4">See PPM for further details</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">FUND ADMINISTRATION</div>
            <div class="text-p4">See PPM for further details</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">TAX & AUDIT</div>
            <div class="text-p4">BDO (Pending Onboarding)</div>
          </div>
          <div class={rowStyle}>
            <div class="text-h4">LEGAL</div>
            <div class="text-p4">Goodwin Proctor LLP</div>
          </div>
        </div>
      </div>
    </div>
  );
}
