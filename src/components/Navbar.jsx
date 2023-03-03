/* Imports */

// Third Party
import { Link } from "react-scroll";

/* Main Component */
const Navbar = ({}) => {
  // JSX
  return (
    <nav
      aria-label="navigation"
      className="hidden gap-8 font-medium text-xl lg:flex"
    >
      <Link
        to="first"
        spy={true}
        smooth={true}
        activeClass="active"
        className={
          "link link-underline link-underline-black leading-10  duration-300 hover:text-primary"
        }
      >
        <span>Accueil</span>
      </Link>

      <Link
        to="second"
        spy={true}
        smooth={true}
        activeClass="active"
        className={
          "link link-underline link-underline-black leading-10  duration-300 hover:text-primary"
        }
      >
        <span>A propos</span>
      </Link>

      <Link
        to="third"
        spy={true}
        smooth={true}
        activeClass="active"
        className={
          "link link-underline link-underline-black leading-10  duration-300 hover:text-primary"
        }
      >
        <span>Projets</span>
      </Link>

      <Link
        to="fourth"
        spy={true}
        smooth={true}
        activeClass="active"
        className={
          "link link-underline link-underline-black leading-10 duration-300 hover:text-primary"
        }
      >
        <span>Témoignage</span>
      </Link>

      {/* <Link
        to="fifth"
        spy={true}
        smooth={true}
        className={
          "link link-underline link-underline-black leading-10  duration-300 hover:text-primary"
        }
      >
        <span>Devis</span>
      </Link> */}
    </nav>
  );
};

/* Exports */
export default Navbar;
