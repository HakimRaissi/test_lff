/* Imports */

// Third party
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";

/* Main Component */
const Sidebar = ({ showMenu, handleHamburgerMenu, setShowContact }) => {
  return (
    <div
      id="sidebar-bg"
      className={`${
        showMenu
          ? "opacity-1 z-20"
          : "opacity-0 -z-50 delay-300 pointer-events-none"
      } lg:hidden fixed top-0 bottom-0 right-0 w-full flex flex-col justify-center items-end duration-300`}
    >
      <div
        className={`${
          showMenu ? "translate-x-0 delay-200" : "translate-x-full "
        } w-full sm:w-3/4 h-full flex flex-col justify-center shadow-2xl bg-light duration-500`}
      >
        <button
          onClick={handleHamburgerMenu}
          className="absolute top-0 right-1 text-6xl rounded-sm hover:bg-gray-200 duration-300"
        >
          <MdClose />
        </button>

        <nav className="flex flex-col gap-y-4">
          <Link
            to="first"
            spy={true}
            smooth={true}
            activeClass="active"
            onClick={handleHamburgerMenu}
            className={
              "link link-underline link-underline-black text-center leading-10 text-2xl duration-300 hover:text-primary"
            }
          >
            <span>Accueil</span>
          </Link>

          <Link
            to="second"
            spy={true}
            smooth={true}
            activeClass="active"
            onClick={handleHamburgerMenu}
            className={
              "link link-underline link-underline-black text-center leading-10 text-2xl duration-300 hover:text-primary"
            }
          >
            <span>A propos</span>
          </Link>

          <Link
            to="third"
            spy={true}
            smooth={true}
            activeClass="active"
            onClick={handleHamburgerMenu}
            className={
              "link link-underline link-underline-black text-center leading-10 text-2xl duration-300 hover:text-primary"
            }
          >
            <span>Projets</span>
          </Link>

          <Link
            to="fourth"
            spy={true}
            smooth={true}
            activeClass="active"
            onClick={handleHamburgerMenu}
            className={
              "link link-underline link-underline-black text-center leading-10 text-2xl duration-300 hover:text-primary"
            }
          >
            <span>Témoignage</span>
          </Link>
        </nav>

        <div className="flex justify-center absolute bottom-24 left-0 right-0">
          <button
            onClick={() => setShowContact((oldstate) => !oldstate)}
            className="md:hidden text-white rounded-md py-2 px-3 bg-lff text-lg font-medium transition hover:bg-light hover:text-lff hover:font-semibold hover:border-lff hover:border-4"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

/* Exports */
export default Sidebar;
