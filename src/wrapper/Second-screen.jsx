/* Imports */
// React
import { useRef, useEffect, useState } from "react";

// NextJS
import Image from "next/image";

// Third Party
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css/sea-green";

/* Main Component */
const SecondScreen = () => {
  // Refs
  const sliderRef = useRef(null);

  //JSX
  return (
    <section className="relative w-full h-full min-h-screen flex justify-center items-center px-3">
      {/* <Splide
          aria-label="My Favorite Images"
          options={{
            direction: "ttb",
            wheel: true,
            height: "auto",
            speed: 1000,
            // pagination: false,
            arrows: false,
            type: "loop",
            gap: 32,
            breakpoints: {
              768: {
                direction: "ltr",
                gap: 16,
                height: "auto",
              },
            },
          }}
        >
          <SplideSlide>
            <Image
              src="/images/webp/dummy-image-slider-1.webp"
              alt=""
              height="600"
              width="300"
              className=""
            />

            <div className="flex flex-col gap-16">
              <p className="w-[280px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, aperiam?
              </p>
              <button className="bg-accent px-4 py-2 text-xl font-semibold rounded-md text-white">
                Nous joindre
              </button>
            </div>
          </SplideSlide>

          <SplideSlide>
            <Image
              src="/images/webp/dummy-image-slider-2.webp"
              alt=""
              height="600"
              width="300"
              className=""
            />

            <div className="flex flex-col gap-16">
              <p className="w-[280px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, aperiam?
              </p>
              <button className="bg-accent px-4 py-2 text-xl font-semibold rounded-md text-white">
                Nous joindre
              </button>
            </div>
          </SplideSlide>

          <SplideSlide>
            <Image
              src="/images/webp/dummy-image-slider-3.webp"
              alt=""
              height="600"
              width="300"
              className=""
            />

            <div className="flex flex-col gap-16">
              <p className="w-[280px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, aperiam?
              </p>
              <button className="bg-accent px-4 py-2 text-xl font-semibold rounded-md text-white">
                Nous joindre
              </button>
            </div>
          </SplideSlide>
        </Splide> */}
    </section>
  );
};

/* Exports */
export default SecondScreen;
