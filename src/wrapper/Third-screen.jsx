/* Imports */
// NextJS
import Image from "next/image";

import { useEffect } from "react";
// import of AOS

import Aos from "aos";
import "aos/dist/aos.css";

/* Main Component */
const ThirdScreen = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  //JSX
  return (
    <section className="relative min-h-screen w-full py-6">
      <div className="lg:max-w-6xl h-full flex flex-col justify-start items-center mx-auto">
        <div className="w-full">
          <h2
            data-aos="fade-up"
            className="text-5xl md:text-8xl font-bold mb-8"
          >
            Lorem ipsum dolor
            <br />
            sit amet.
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-start items-center gap-y-8 md:gap-x-32">
          <div className="relative w-[240px] sm:w-[300px] h-[240px] sm:h-[300px]">
            <Image
              src={"/icons/LFF_logo.svg"}
              alt={"LFF logo"}
              fill
              className=""
              data-aos="fade-up"
            />
          </div>
          <div className="w-full md:w-1/2 pb-8 pr-8">
            <p data-aos="fade-up" className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <br />

            <p data-aos="fade-up" className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Exports */
export default ThirdScreen;
