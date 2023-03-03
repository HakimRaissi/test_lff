/* Imports */

import { useEffect } from "react";
// import of AOS

import Aos from "aos";
import "aos/dist/aos.css";

// Third party
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Nextjs
import Image from "next/image";

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

/* Constants */

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  arrows: false,
};

/* Main Component */
const FifthScreen = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // JSX
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start items-center px-3 py-6">
      <h2
        data-aos="fade-up"
        className="text-3xl sm:text-4xl lg:text-6xl mb-8 text-center font-bold"
      >
        Nos Client peuvent en temoigner
      </h2>

      {/* <div className="w-full mt-16">
        <Slider
          {...settings}

          // autoplay={true}
          // autoplaySpeed={3000}
        >
          {testimonials &&
            testimonials.map((testimony, index) => {
              return <Card key={index + testimony.id} data={testimony} />;
            })}
        </Slider>
      </div> */}
    </section>
  );
};

/* Sub components */

const Card = ({ data }) => {
  return (
    <div data-aos="fade-up" className="w-full flex justify-center mb-8">
      <div className="p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 duration-300 bg-white">
        <div className="flex items-center mb-4">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src={data.imageUrl}
              alt={data.client}
              fill
              className="rounded-full"
            />
          </div>

          <div className="ml-2">
            <p className="text-lg font-semibold">{data.client}</p>
            <p className="text-sm text-gray-600">{data.company}</p>
          </div>
        </div>

        <p>{data.feedback}</p>
      </div>
    </div>
  );
};

/* Exports */
export default FifthScreen;
