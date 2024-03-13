import Image from "next/image";
import React from "react";

export default function CompAdv() {
    const boxStyle = "border-white border-2 rounded-2xl p-8 w-1/3 m-2";
    const boxHeading = "text-xl font-bold text-center pb-4";
    const boxText = "text-sm text-center";
    const imgStyle = "flex justify-center pb-4";
  return (
    <div className="h-fit m-10 py-20">
      <h3 className="pb-20 font-italiana text-3xl se:text-5xl md:text-7xl text-center mb-3">
        LUXURI : COMPETITIVE ADVANTAGE
      </h3>
      <div className="lg:mx-20">
        <div className="flex lg:flex-row flex-col">
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/noun-experience-63014821.svg" alt="" />
            </div>
            <h5 className={boxHeading}>EXPERIENCED TEAM</h5>
            <p className={boxText}>
              We have one of the largest networks of clients in the luxury STR
              space, including professional athletes, performers and many other
              celebrities. Our dedicated local managers help make our properties
              rent-ready more quickly than any of our competitors
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-2.svg" alt="" />
            </div>
            <h5  className={boxHeading}>MARKET ANALYSIS</h5>
            <p className={boxText}>
              We have a dedicated team focused on optimizing ADRs based upon
              seasonality,location and availability. This allowsus to maximize
              our revenues and our profitability.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-3.svg" alt="" />
            </div>
            <h5 className={boxHeading}>TECHNOLOGY</h5>
            <p className={boxText}>
              We are currently developing our own proprietary CRM (Customer
              Relationship Management) and PMS(Property Management System)which
              will allow us to further optimize costs.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-4.svg" alt="" />
            </div>
            <h5 className={boxHeading}>EXPOSURE</h5>
            <p className={boxText}>
              In addition to our over 20k Instagram followers, we are able to
              promote our vacation rentals to more than 25million monthly
              travelers across multiple booking platforms, including Airbnb,
              Vrbo and Booking.com
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-5.svg" alt="" />
            </div>
            <h5 className={boxHeading}>GUEST EXPERIENCE</h5>
            <p className={boxText}>
              To ensure a world className experience for our guests, we offer 24/7
              concierge service from booking to check out. This isn’t about
              communications, it is really about customer experience.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-6.svg" alt="" />
            </div>
            <h5 className={boxHeading}>ADDED AMENITIES</h5>
            <p className={boxText}>
              Private jets, exotic cars, chauffeur driven Rolls Royces, chefs,
              yachts, babysitting, nannies, high end club reservations, and
              florists to name a few. If our guests want it, we provide it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
