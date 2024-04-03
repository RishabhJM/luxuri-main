import Image from "next/image";
import React from "react";

export default function CompAdv() {
  const boxStyle = "border-white border-2 rounded-2xl p-4 md:p-8 lg:w-1/3 m-2";
  const boxHeading = "text-xl font-bold text-center pb-4";
  const boxText = "text-sm text-center";
  const imgStyle = "flex justify-center pb-4";
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
        BENIFITS OF JOINING THE LUXURI TEAM
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
            </div>
            <h5 className={boxHeading}>MAXIMIZING REVENUE</h5>
            <p className={boxText}>
              We create professional listings and promote your vacation rental
              to more than 25 million monthly travelers across multiple booking
              platforms, including AirBnb, HomeAway, VRBO & Booking.com.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-2.svg" alt="" />
            </div>
            <h5 className={boxHeading}>MARKET ANALYSIS</h5>
            <p className={boxText}>
              Knowing competition is key. Our specialty is understanding the
              opportunities within our markets & strategizing to our desired
              margins.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-3.svg" alt="" />
            </div>
            <h5 className={boxHeading}>ADDED AMENITIES</h5>
            <p className={boxText}>
              Luxury cars, planes, chefs, yachts to name a few - if your guests
              want it, we can get it!
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-4.svg" alt="" />
            </div>
            <h5 className={boxHeading}>EXPOSURE</h5>
            <p className={boxText}>
              We operate on more than 10 rental platforms which translate into
              higher occupancy.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-5.svg" alt="" />
            </div>
            <h5 className={boxHeading}>COMMUNICATIONS</h5>
            <p className={boxText}>
              To ensure a world class experience for your clients, we offer
              around the clock communication service. From booking to check out,
              we have a personal approach throughout their reservation.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-6.svg" alt="" />
            </div>
            <h5 className={boxHeading}>DESIGN</h5>
            <p className={boxText}>
              Appearance is everything. Whether it&apos;s replacing the
              chandelier or upgrading the furniture, our team knows what&apos;s
              needed to impress and attract the clients you want.
            </p>
          </div>
        </div>
      </div>
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
            </div>
            <h5 className={boxHeading}>EFFICIENCY</h5>
            <p className={boxText}>
              Our clients are impressed with how fast we can bring a home to
              market. Most people take months to get a house prepared, we can do
              it in 7 days, no matter what size the home.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-2.svg" alt="" />
            </div>
            <h5 className={boxHeading}>LOWER COSTS</h5>
            <p className={boxText}>
              Clients cannot believe how we are able to actually lower their
              costs. With all of our staff on salary, we are able to pass fixed
              costs off to clients which reduces their operating expenses.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-3.svg" alt="" />
            </div>
            <h5 className={boxHeading}>REVENUE</h5>
            <p className={boxText}>
              When we take on a new market/property, we do it because we know
              it&apos;s the right fit. Our data driven partnerships are what enable
              us to deliver profits that impress.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-4.svg" alt="" />
            </div>
            <h5 className={boxHeading}>THE EXTRA MILE</h5>
            <p className={boxText}>
              We know hospitality is all about that special touch. With every
              location we manage, our focus is making your guests&apos; experience
              generous, thoughtful and unique.
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-5.svg" alt="" />
            </div>
            <h5 className={boxHeading}>EXPERIENCED TEAM</h5>
            <p className={boxText}>
              Our team has 10 years of experience in the property rental &
              hospitality business. Meet your dedicated, local manager who will
              help you make your property rent-ready (design tips, linen
              recommendations, the whole nine yards).
            </p>
          </div>
          <div className={boxStyle}>
            <div className={imgStyle}>
              <Image width={50} height={50} src="/Group-6.svg" alt="" />
            </div>
            <h5 className={boxHeading}>PROFESSIONALISM</h5>
            <p className={boxText}>
              We take our presentation seriously. Our clients often express how
              professional our team is, from our service staff to our executive
              team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
