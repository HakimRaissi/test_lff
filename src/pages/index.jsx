// React
import { useState, useEffect, useRef } from "react";

// Nextjs
import Head from "next/head";

// Third-party
import { Link, Element, Events, scrollSpy } from "react-scroll";

// Wrapper
import FirstScreen from "@/wrapper/First-screen";
import SecondScreen from "@/wrapper/Second-screen";
import ThirdScreen from "@/wrapper/Third-screen";
import FourthScreen from "@/wrapper/Fourth-screen";
import FifthScreen from "@/wrapper/Fifth-screen";

// Containers
import Contact from "@/containers/Contact";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

/* Main Component */
const Home = () => {
  // Local state
  const [showContact, setShowContact] = useState(false);

  // Refs
  const customCursorRef = useRef(null);

  // Life cycle
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // useEffect(() => {
  //   if (window.navigator.userAgentData.mobile) {
  //     customCursorRef.current.remove();
  //   }
  //   window.addEventListener("mousemove", positionElement);
  //   // return () => window.removeEventListener("mousemove", positionElement);
  // }, []);

  // useEffect(() => {
  //   const contactPage = document.getElementById("contact");
  //   const contatForm = document.getElementById("form-contact");
  //   if (showContact) {
  //     contactPage.classList.add("delay-200");
  //   } else {
  //     contactPage.classList.remove("delay-1000");
  //   }
  // }, [showContact]);

  // const positionElement = (event) => {
  //   if (
  //     event.clientY <= 2 ||
  //     event.clientX <= 2 ||
  //     event.clientX >= window.innerWidth - 2 ||
  //     event.clientY >= window.innerHeight - 2
  //   ) {
  //     customCursorRef.current.classList.add("hidden");
  //   } else {
  //     customCursorRef.current.classList.remove("hidden");
  //   }

  //   const mouseY = event.clientY - 10;
  //   const mouseX = event.clientX - 10;

  //   customCursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // };

  // JSX
  return (
    <>
      <Head>
        <title>La Ferme Francaise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/LFF_logo.svg" />
      </Head>

      {/* Custom Cursor */}
      {/* <div id="custom-cursor" ref={customCursorRef}></div> */}

      {/* Header */}
      <Header setShowContact={setShowContact} />

      {/* Main */}
      <main className="flex flex-col items-center w-full">
        <Element name="first" className="w-full">
          <FirstScreen setShowContact={setShowContact} />
        </Element>

        <Element className="w-full relative">
          <SecondScreen />
        </Element>

        <Element name="second" className="w-full">
          <ThirdScreen />
        </Element>

        <Element name="third" className="w-full">
          <FourthScreen />
        </Element>

        <Element name="fourth" className="w-full">
          <FifthScreen />
        </Element>
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact form */}
      <Contact showContact={showContact} setShowContact={setShowContact} />

      {/* Scroll to the top button */}
      {/* <ScrollTop /> */}
    </>
  );
};

/* Exports */
export default Home;
