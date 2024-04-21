import Image from "next/image";
import React from "react";

export default function Partner() {
  return (
    <div class="h-fit">
      <div className="p-10 md:p-20">
        <h3 class="pb-10 font-italiana text-3xl se:text-5xl md:text-7xl text-center mb-3">
          Key Partner : LUXURI
        </h3>
        <div class="flex lg:flex-row flex-col py-6 md:py-10">
          <div class="lg:w-1/2 pb-10 md:px-10">
            <div className="pb-6">
              <h6 class="pb-6 text-xl md:text-2xl font-semibold">
                Luxuri® is the largest luxury residential property management
                company in Florida and Aspen
              </h6>
              <div class="border-l-8 border-gray-600 py-4">
                <div class="text-md se:text-lg pl-4">
                  With a well known CEO, 14 agents, 25 staff, and a network of
                  trusted service providers, we satisfy the exacting standards
                  of our guests and deliver powerful returns for our business
                  partners.
                </div>
              </div>
            </div>

            <h6 class="pb-6 text-xl md:text-2xl font-semibold">
              Luxuri® is the exclusive provider of South Florida luxury homes
              for Marriott&apos;s Bonvoy home rental program.
            </h6>
            <div class="border-l-8 border-gray-600 py-4">
              <div class="text-md se:text-lg pl-4">
                We pride ourselves on repeat business and know that our clients
                are happy to spend more money with us when they have a great
                experience. From their first experience to their last, our
                clients know that we accommodate and provide everything (homes,
                cars, yachts, drivers, chefs, restaurant reservations, security
                staff, etc.) needed for an extravagant, worry-free stay. Our
                clients know they get the best experience by booking through
                Luxuri®.
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 md:px-10">
            <div class="border-t-2 border-gray-600">
              <div className="py-4">
                <span class="number-gol text-5xl se:text-7xl font-italiana pr-4">
                  $400M
                </span>
                <p className="text-2xl tracking-widest">
                  <span className="font-bold">72</span> SOLD & UNDER MANAGEMENT{" "}
                  <br />
                  <span className="font-bold">143</span> DIRECT BOOKING ACCESS
                  TO OVER <br />
                  1000 VILLAS WORLDWIDE
                </p>
              </div>
            </div>

            <div class="border-t-2 border-gray-600">
              <div className="py-4">
                <span class="number-gol text-5xl se:text-7xl font-italiana pr-4">
                  $300M
                </span>
                <p className="text-2xl tracking-widest">
                  15 HIGH-END RESIDENTIAL PROPERTIES IN ASPEN
                </p>
              </div>
            </div>

            <div class="border-t-2 border-gray-600">
              <div className="py-4">
                <span class="number-gol text-5xl se:text-7xl font-italiana pr-4">
                  1000+
                </span>
                <p className="text-2xl tracking-widest">
                  DIRECT TO OWNER BOOKING ACCESS WORLDWIDE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-[90vw] h-[30px] sm:h-[60px] lg:h-[80px] flex justify-center items-center">
          <Image className="mx-auto" src="/companies.png" alt="" fill/>
        </div>
      </div>
    </div>
  );
}
