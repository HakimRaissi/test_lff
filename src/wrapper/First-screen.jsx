/* Imports */

// Aos
import Aos from "aos";
import "aos/dist/aos.css";

// React
import { useRef, useEffect, useState } from "react";

// NextJS

// Third party

/* Main Component */
const FirstScreen = ({ setShowContact }) => {
  // Local state
  const [showScroll, setShowScroll] = useState(true);

  // Life cycle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aos initialisation

  useEffect(() => {
    Aos.init();
  }, []);

  // Handler
  const handleScroll = () => {
    const scrollTrigger = 300;

    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      setShowScroll(false);
    } else {
      setShowScroll(true);
    }
  };

  //JSX
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center">
      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
        <h2 className="w-full text-4xl xl:text-6xl font-bold text-center z-10 play-anim fontp">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit
        </h2>
        <div className="rond hidden lg:block"></div>
      </div>

      <div
        className={`absolute bottom-4 left-8  flex-col items-center hidden sm:flex duration-300 ${
          showScroll ? "opacity-100" : "opacity-0"
        }`}
      >
        <p id="scroll-text" className="capitalize text-lg tracking-wider">
          scroll down
        </p>
        <div className="h-[70px] w-[3px] bg-dark mt-2"></div>
      </div>

      <button
        onClick={() => setShowContact((oldstate) => !oldstate)}
        className="md:hidden mt-24 text-white rounded-md py-2 px-3 bg-lff text-lg font-medium transition hover:bg-light hover:text-lff hover:font-semibold hover:border-lff hover:border-4"
      >
        Contact
      </button>
    </section>
  );
};

/* Sub component */

/* Exports */
export default FirstScreen;
