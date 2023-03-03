/* Imports */
// React
import { useEffect, useRef, useState } from "react";

// NextJS
import Image from "next/image";

// Third Party
import { Link } from "react-scroll";
import { MdOutlineMenu } from "react-icons/md";

// Components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/* Main Component */
const Header = ({ setShowContact }) => {
  // Local State
  const [showMenu, setShowMenu] = useState(false);

  // Refs
  const headerRef = useRef(null);

  // Life cycle
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderBackground);
    return () => window.removeEventListener("scroll", handleHeaderBackground);
  }, []);

  // Utility function
  const handleHeaderBackground = () => {
    const scrollTrigger = 240;
    const header = headerRef.current;

    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      header.classList.add("shadow-header");
      header.classList.add("bg-white");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove("shadow-header");
      header.classList.remove("bg-white");
      header.classList.add("bg-transparent");
    }
  };

  const handleHamburgerMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  // JSX
  return (
    <header
      ref={headerRef}
      className="h-16 fixed top-0 left-0 right-0 flex justify-center items-center px-3 py-6 duration-150 bg-transparent z-20"
    >
      <div className="w-full lg:max-w-6xl flex justify-between items-center">
        <Link
          to="first"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center gap-4"
        >
          <Image
            id="header-logo"
            src="icons/LFF_logo.svg"
            alt="LFF logo"
            width={50}
            height={50}
            // className="animate-rotation"
          />
          {/* <span className="text-2xl font-medium">LFF</span> */}
        </Link>

        <div className="flex items-center gap-x-4 lg:gap-10">
          <Navbar />

          <button
            onClick={() => setShowContact((oldstate) => !oldstate)}
            className="hidden md:block text-white rounded-md py-2 px-3 bg-lff text-lg font-medium transition hover:bg-light hover:text-lff hover:font-semibold hover:border-lff hover:border-4"
          >
            Contact
          </button>

          <MdOutlineMenu
            onClick={handleHamburgerMenu}
            className="text-5xl cursor-pointer lg:hidden"
          />
        </div>
      </div>

      <Sidebar
        showMenu={showMenu}
        handleHamburgerMenu={handleHamburgerMenu}
        setShowContact={setShowContact}
      />
    </header>
  );
};

/* Exports */
export default Header;
