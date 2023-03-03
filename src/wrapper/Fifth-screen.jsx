/* Imports */

// React
import { useEffect, useState } from "react";

// Nextjs
import Image from "next/image";

// Third party
import Aos from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

/* Dummy Data */
const testimonials = [
  {
    id: "u1",
    imageUrl:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677325672/dummy_users/alex-suprun-ZHvM3XIOHoE-unsplash_onigqx.jpg",
    client: "Benjamin",
    company: "Not Meta",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: "u2",
    imageUrl:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677329761/dummy_users/edward-cisneros-_H6wpor9mjs-unsplash_zw91mo-Square_cckw7p.jpg",
    client: "Michelle",
    company: "Not Google",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: "u3",
    imageUrl:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677325667/dummy_users/julian-wan-WNoLnJo7tS8-unsplash_wnljue.jpg",
    client: "Pierre",
    company: "Not Microsoft",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: "u4",
    imageUrl:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677325672/dummy_users/alex-suprun-ZHvM3XIOHoE-unsplash_onigqx.jpg",
    client: "Jean",
    company: "Not Twitter",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

/* Main Component */
const FifthScreen = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // JSX
  return (
    <section className="relative max-w-6xl w-full min-h-screen flex flex-col justify-start items-center mx-auto py-6">
      <h2
        data-aos="fade-up"
        className="text-3xl sm:text-4xl lg:text-6xl mb-8 text-center font-bold"
      >
        Nos Client peuvent en temoigner
      </h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        className="swiper-fifth-screen"
      >
        {testimonials &&
          testimonials.map((testimony, index) => {
            return (
              <SwiperSlide key={index + testimony.id}>
                <Card testimony={testimony} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

/* Sub components */

const Card = ({ testimony }) => {
  return (
    <div className="w-full flex justify-center">
      <div
        data-aos="fade-up"
        className="min-w-[240px] w-[240px] sm:min-w-[420px] sm:w-[420px] md:min-w-[500px] md:w-[500px] lg:min-w-[700px] lg:w-[700px]  justify-center inline-flex border-blue-600"
      >
        <div className="p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 duration-300 bg-white">
          <div className="flex items-center mb-4">
            <div className="relative w-[80px] h-[80px]">
              <Image
                src={testimony.imageUrl}
                alt={testimony.client}
                fill
                className="rounded-full"
              />
            </div>

            <div className="ml-2">
              <p className="text-lg font-semibold">{testimony.client}</p>
              <p className="text-sm text-gray-600">{testimony.company}</p>
            </div>
          </div>

          <p>{testimony.feedback}</p>
        </div>
      </div>
    </div>
  );
};

/* Exports */
export default FifthScreen;
