/* Imports */
// React
import { useRef, useEffect, useState } from "react";

// NextJS
import Image from "next/image";

// Third Party
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

/* Main Component */
const SecondScreen = () => {
  // Refs
  const sliderRef = useRef(null);

  //JSX
  return (
    <section className="relative w-full h-screen min-h-screen flex justify-center items-center">
      <div className="w-screen h-screen lg:h-[600px] md:px-12 lg:px-24">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          direction={"vertical"}
          mousewheel={true}
          className="swiper-second-screen"
        >
          <SwiperSlide>
            <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center gap-y-24 md:gap-12">
              <div id="slide-1"></div>

              <div className="flex flex-col items-center lg:self-end gap-16">
                <p className="w-[400px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, aperiam?
                </p>
                <button className="w-[280px] bg-accent px-4 py-2 text-xl font-semibold rounded-md text-white">
                  Nous joindre
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center gap-y-24 md:gap-12">
              <div id="slide-2"></div>
              <div className="flex flex-col items-center lg:self-end gap-16">
                <p className="w-[400px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, aperiam?
                </p>
                <button className="w-[280px] bg-accent px-4 py-2 text-xl font-semibold rounded-md text-white">
                  Nous joindre
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center gap-y-24 md:gap-12">
              <div id="slide-3"></div>

              <div className="flex flex-col items-center lg:self-end gap-16">
                <p className="w-[400px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, aperiam?
                </p>
                <button className="w-[280px] bg-accent px-4 py-2 text-xl font-semibold rounded-md text-white">
                  Nous joindre
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

/* Exports */
export default SecondScreen;
