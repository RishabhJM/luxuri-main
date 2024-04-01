import { PROPERTIES_DATA } from "@/constants/constants";
import Image from "next/image";
import SimpleSlider from "./Misc/SimpleSlider";

export default function Booking() {
  return (
    <div className="h-fit bg-cover bg-center p-10 md:px-10 md:py-16" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),linear-gradient(to top, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),url(/pexels-photo-113578555.jpg)`}}>
      <div className="mb-4">
        <h3 className="text-center text-3xl se:text-5xl font-italiana mb-10">
          PROPERTIES CURRENTLY MANAGED BY LUXURI
        </h3>
      </div>

      <SimpleSlider
        dots={true}
        noOfSlides={3}
        autoPlay={false}
        infinite={false}
        arrows={true}
      >
        {PROPERTIES_DATA.map((t) => (
          <div className="rounded-3xl border-2 border-gray-500" key={t.key}>
            <div className="flex justify-center border-b-2 w-auto h-[250px] se:h-[300px] relative border-gray-500">
              <Image className="rounded-t-3xl" src={t.src} fill></Image>
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
