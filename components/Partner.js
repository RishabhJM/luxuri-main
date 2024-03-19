import Image from "next/image";
import React from "react";

export default function Partner() {
  return (
    <div class="h-fit p-10 md:p-20">
      <h3 class="pb-10 font-italiana text-3xl se:text-5xl md:text-7xl text-center mb-3">
        Key Partner : LUXURI
      </h3>
      <div class="flex lg:flex-row flex-col">
        <div class="lg:w-1/2 pb-10">
          <div className="pb-6">
            <h6 class="pb-6 text-2xl font-semibold">
              Luxuri® is the largest luxury residential property management
              company in Florida and Aspen
            </h6>
            <div class="border-l-8 border-gray-600 py-4">
              <div class="text-md se:text-lg pl-4">
                With a well known CEO, 14 agents, 25 staff, and a network of
                trusted service providers, we satisfy the exacting standards of
                our guests and deliver powerful returns for our business
                partners.
              </div>
            </div>
          </div>

          <h6 class="pb-6 text-2xl font-semibold">
            Luxuri® is the exclusive provider of South Florida luxury homes for
            Marriott’s Bonvoy home rental program.
          </h6>
          <div class="border-l-8 border-gray-600 py-4">
            <div class="text-md se:text-lg pl-4">
              We pride ourselves on repeat business and know that our clients
              are happy to spend more money with us when they have a great
              experience. From their first experience to their last, our clients
              know that we accommodate and provide everything (homes, cars,
              yachts, drivers, chefs, restaurant reservations, security staff,
              etc.) needed for an extravagant, worry-free stay. Our clients know
              they get the best experience by booking through Luxuri®.
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="border-t-2 border-gray-600">
            <div className="py-2">
              <span class="number-gol text-5xl se:text-7xl font-italiana pr-4">$750M</span>
              <p className="text-2xl tracking-widest">
                PROPERTIES UNDER MANAGEMENT BY LUXURI®
              </p>
            </div>
          </div>

          <div class="border-t-2 border-gray-600">
            <div className="py-2">
              <span class="number-gol text-5xl se:text-7xl font-italiana pr-4">$300M</span>
              <p className="text-2xl tracking-widest">
                TRANSACTIONS BROKERED BY LUXURI®
              </p>
            </div>
          </div>

          <div class="border-t-2 border-gray-600">
            <div className="py-2">
              <span class="number-gol text-5xl se:text-7xl font-italiana pr-4">1000+</span>
              <p className="text-2xl tracking-widest">
                DIRECT TO OWNER BOOKINGACCESS WORLDWIDE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <Image width={1000} height={200} src="/companies.png" alt="" />
      </div>
    </div>
  );
}
