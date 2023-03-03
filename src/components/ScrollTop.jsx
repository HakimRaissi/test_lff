/* Imports */
// React
import { useEffect, useState } from "react";

// Third party
import { Link } from "react-scroll";

import { MdArrowUpward } from "react-icons/md";

/* Main Component */
const ScrollTop = () => {
  // Local state
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Life cycle
  useEffect(() => {
    window.addEventListener("scroll", handleShowBtn);

    return () => window.removeEventListener("scroll", handleShowBtn);
  }, []);

  // Utility Functions
  const handleShowBtn = () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  // JSX
  return (
    <Link
      to="first"
      spy={true}
      smooth={true}
      className={`${
        showTopBtn
          ? "opacity-100 scale-100 bottom-16"
          : "opacity-0 scale-[0.3] -bottom-40"
      } fixed right-16 text-3xl p-2 bg-white text-black border-2 border-black rounded-lg hover:text-white hover:bg-black duration-300`}
    >
      <MdArrowUpward />
    </Link>
  );
};

/* Exports */
export default ScrollTop;
