import { PROPERTIES_DATA } from "@/constants/constants";
import Image from "next/image";
import SimpleSlider from "./Misc/SimpleSlider";

export default function Booking() {
  return (
    <div className=" rounded-3xl bg-cover bg-center md:m-10 p-4 md:p-10" style={{backgroundImage: `url(/pexels-photo-113578555.jpg)`}}>
      <div className="mb-4">
        <h3 className="text-center text-3xl se:text-5xl md:text-7xl font-italiana mb-10">
          PROCESS: ACQUISITION TO BOOKING
        </h3>
      </div>

      <SimpleSlider
        dots={true}
        noOfSlides={3}
        autoPlay={false}
        infinite={false}
      >
        {PROPERTIES_DATA.map((t) => (
          <div className="rounded-3xl border-2 border-gray-500" key={t.key}>
            <div className="flex justify-center border-b-2 border-gray-500">
              <Image className="rounded-t-3xl" src={t.src} width={600} height={200}></Image>
              {/* <div className="rooms-label">{t.rooms}</div> */}
            </div>
            <div className="bg-[#181818] rounded-b-3xl">
              <div className="font-italiana text-center border-b-2 border-gray-500 py-4">{t.title}</div>
              <div className="p-2 md:p-4 text-[8px] md:text-xs flex md:flex-row flex-col text-center justify-between">
                <span>GROSS BOOKINGS:$ <span className="text-luxuri-golden">{t.bookings}</span> </span>
                <span className="font-italiana">{t.location}</span>
                <span>{t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}
