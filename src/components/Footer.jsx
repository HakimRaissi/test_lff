/* Imports */

// Third party
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

/* Main Component */
const Footer = () => {
  // JSX
  return (
    <footer className="w-full h-32 absolute bottom-0 left-0 right-0 py-24 flex flex-col justify-center items-center bg-dark">
      <p className="text-light">© 2023 La Ferme Francaise.</p>

      <div className="flex gap-12 mt-8">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white duration-300 hover:text-primary"
        >
          <FaTwitter />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white duration-300 hover:text-primary"
        >
          <FaInstagram />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white duration-300 hover:text-primary"
        >
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

/* Exports */
export default Footer;
