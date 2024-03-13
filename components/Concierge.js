import React, { useState } from "react";
import { CONCIERGE } from "@/constants/constants";

export default function Concierge() {
  const [services, setServices] = useState(0);
  const [bgImage, setBgImage] = useState("image1.jpg");
  return (
    <div className="h-[90vh] rounded-3xl bg-cover bg-center flex flex-col justify-between m-10 p-10" style={{backgroundImage: `url(/slider/${bgImage})`}}>
      <div className="text-center">
        <h3 className="text-5xl font-italiana">{CONCIERGE[services].title}</h3>
        <p>
          Luxuri prides itself on complete discretion when it comes to our
          clients.
        </p>
      </div>
      <div id="category-buttons">
        <button
          className="category-button"
          onClick={() => {setServices(0); setBgImage("image1.jpg")}}
        >
          IN-HOUSE GOURMET CHEF
        </button>
        <button className="category-button" onClick={() => {setServices(1); setBgImage("image3.jpg")}}>
          YATCH CHARTER
        </button>
        <button className="category-button" onClick={() => {setServices(2); setBgImage("image2.jpg")}}>
          PRIVATE JET
        </button>
        <button
          className="category-button"
    onClick={() => {setServices(3); setBgImage("image4.jpg")}}
        >
          PRIVATE DRIVER
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(4); setBgImage("image5.jpg")}}
        >
          IN-HOUSE MASSAGE
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(5); setBgImage("image6.jpg")}}
        >
          RESTAURANT ACCESS
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(6); setBgImage("image7.jpg")}}
        >
          EXCLUSIVE EVENT ACCESS
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(7); setBgImage("image8.jpg")}}
        >
          IN-HOUSE FACIALS
        </button>
        <button className="category-button" onClick={() => {setServices(8); setBgImage("image9.jpg")}}>
          EVENT PLANNER
        </button>
        <button
          className="category-button"
    onClick={() => {setServices(9); setBgImage("image10.jpg")}}
        >
          DAILY CLEANING
        </button>
        <button className="category-button" onClick={() => {setServices(10); setBgImage("image11.jpg")}}>
          HELI SKIING
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(11); setBgImage("image12.jpg")}}
        >
          AIRPORT TRANSFER
        </button>
        <button className="category-button" onClick={() => {setServices(12); setBgImage("image13.jpg")}}>
          PHOTOGRAPHER
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(13); setBgImage("image14.jpg")}}
        >
          NIGHTCLUB/LOUNGE ACCESS
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(14); setBgImage("image15.jpg")}}
        >
          PERSONAL SHOPPER
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(15); setBgImage("image16.jpg")}}
        >
          SPRINTER SERVICES
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(16); setBgImage("image17.jpg")}}
        >
          PRIVATE SECURITY
        </button>
        <button
          className="category-button"
          onClick={() => {setServices(17); setBgImage("image18.jpg")}}
        >
          BABY SITTER / NANNY
        </button>
        <button
          className="category-button"
    onClick={() => {setServices(18); setBgImage("image19.jpg")}}
        >
          JET SKI RENTALS
        </button>
      </div>
    </div>
  );
}
