import Image from "next/image";
import React from "react";

export default function Roadmap() {
  const boxStyle =
    "flex flex-col justify-between border-white border-2 rounded-2xl p-4 md:p-8 lg:w-1/3 m-2";
  const boxHeading = "text-xl font-bold text-center pb-4";
  const boxText = "text-sm text-center";
  const imgStyle = "flex flex-col items-center justify-center pb-2";
  return (
    <div
      className="h-fit p-10 md:py-20 md:px-44"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),linear-gradient(to top, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),url(/path378.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="pb-20 font-italiana text-3xl se:text-5xl text-center mb-3">
        ROADMAP
      </h3>
      <div className="lg:mx-20">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image
                width={50}
                height={50}
                src="/noun-experience-63014821.svg"
                alt=""
              />
              <h5 className={boxHeading}>MAXIMIZING REVENUE</h5>
              <p className={boxText}>
                We create professional listings and promote your vacation rental
                to more than 25 million monthly travelers across multiple
                booking platforms, including AirBnb, HomeAway, VRBO &
                Booking.com.
              </p>
            </div>

            <h6 className="text-center text-3xl text-[#9D855F] font-italiana">
              01
            </h6>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-2.svg" alt="" />
              <h5 className={boxHeading}>MARKET ANALYSIS</h5>
              <p className={boxText}>
                Knowing competition is key. Our specialty is understanding the
                opportunities within our markets & strategizing to our desired
                margins.
              </p>
            </div>

            <h6 className="text-center text-3xl text-[#9D855F] font-italiana">
              02
            </h6>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-3.svg" alt="" />
              <h5 className={boxHeading}>ADDED AMENITIES</h5>
              <p className={boxText}>
                Luxury cars, planes, chefs, yachts to name a few - if your
                guests want it, we can get it!
              </p>
            </div>

            <h6 className="text-center text-3xl text-[#9D855F] font-italiana">
              03
            </h6>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-4.svg" alt="" />
              <h5 className={boxHeading}>EXPOSURE</h5>
              <p className={boxText}>
                We operate on more than 10 rental platforms which translate into
                higher occupancy.
              </p>
            </div>

            <h6 className="text-center text-3xl text-[#9D855F] font-italiana">
              04
            </h6>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-5.svg" alt="" />
              <h5 className={boxHeading}>COMMUNICATIONS</h5>
              <p className={boxText}>
                To ensure a world class experience for your clients, we offer
                around the clock communication service. From booking to check
                out, we have a personal approach throughout their reservation.
              </p>
            </div>

            <h6 className="text-center text-3xl text-[#9D855F] font-italiana">
              05
            </h6>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-6.svg" alt="" />
              <h5 className={boxHeading}>DESIGN</h5>
              <p className={boxText}>
                Appearance is everything. Whether it&apos;s replacing the
                chandelier or upgrading the furniture, our team knows
                what&apos;s needed to impress and attract the clients you want.
              </p>
            </div>

            <h6 className="text-center text-3xl text-[#9D855F] font-italiana">
              06
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
