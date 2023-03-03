/* Imports */
// React
import { useState, useEffect } from "react";

// import of AOS

import Aos from "aos";
import "aos/dist/aos.css";
// React

// NextJS
import Image from "next/image";

// Third party
import { TbPlus } from "react-icons/tb";

/* Dummy Data */
const data = [
  {
    id: "p1",
    name: "Carent - Location de Voiture",
    previewImage:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1654899466/demos/nextjs-car-rental/Capture_d_%C3%A9cran_2022-06-11_001309_zvgyxi.png",
    techstack: ["nextjs", "javaScript", "css", "tailwind"],
    liveDemo: "https://github.com/HakimRaissi/nextjs-car-rental",
  },
  {
    id: "p2",
    name: "Banksy - Page d'accueil",
    previewImage:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677330047/demos/LFF/Screenshot_from_2023-02-25_14-00-28_h0modf.png",
    techstack: ["react", "javaScript", "css", "tailwind"],
    liveDemo: "https://creative-peony-1f5178.netlify.app/",
  },
  {
    id: "p3",
    name: "Manage - Page d'accueil",
    previewImage:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677330046/demos/LFF/Screenshot_from_2023-02-25_14-00-15_dgblgf.png",
    techstack: ["html, javaScript", "css"],
    liveDemo: "https://hakimraissi.github.io/digital-product-landing-page/",
  },
  {
    id: "p4",
    name: "Banksy - Page d'accueil",
    previewImage:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677330047/demos/LFF/Screenshot_from_2023-02-25_14-00-28_h0modf.png",
    techstack: ["react", "javaScript", "css", "tailwind"],
    liveDemo: "https://creative-peony-1f5178.netlify.app/",
  },
  {
    id: "p5",
    name: "Carent - Location de Voiture",
    previewImage:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1654899466/demos/nextjs-car-rental/Capture_d_%C3%A9cran_2022-06-11_001309_zvgyxi.png",
    techstack: ["nextjs", "javaScript", "css", "tailwind"],
    liveDemo: "https://github.com/HakimRaissi/nextjs-car-rental",
  },
  {
    id: "p6",
    name: "Manage - Page d'accueil",
    previewImage:
      "https://res.cloudinary.com/dard8s66g/image/upload/v1677330046/demos/LFF/Screenshot_from_2023-02-25_14-00-15_dgblgf.png",
    techstack: ["html, javaScript", "css"],
    liveDemo: "https://hakimraissi.github.io/digital-product-landing-page/",
  },
];

/* Constant */
const filters = [
  { icon: "", name: "all" },
  { icon: "", name: "react" },
  { icon: "", name: "nextjs" },
  { icon: "", name: "svelte" },
  { icon: "", name: "tailwind" },
];

/* Main Component */
const FourthScreen = () => {
  // Local state
  const [projects, setProjects] = useState(data.slice(0, 4));
  const [currentTab, setCurrentTab] = useState("all");

  // Life Cycle
  useEffect(() => {
    Aos.init();
  }, []);

  // Handlers
  const handleTab = (newtab) => {
    setCurrentTab(newtab);

    if (newtab === "all") {
      setProjects(data);
    } else {
      const newProjects = data.filter((item) =>
        item.techstack.includes(newtab)
      );
      setProjects(newProjects);
    }
  };

  const handleViewMore = () => {
    // const remainingItems = data.length - projects.length
    // console.log(remainingItems)

    setProjects([...projects, ...data.slice(projects.length, data.length)]);
  };

  //JSX
  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center py-6">
      <div className="lg:max-w-6xl flex flex-col justify-start items-center">
        <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
          {filters &&
            filters.map((filter, index) => {
              return (
                <div
                  // data-aos="fade-up"
                  key={index + filter.name}
                  onClick={() => handleTab(filter.name)}
                  className={`${
                    currentTab === filter.name
                      ? "bg-white text-primary shadow-xl"
                      : ""
                  } py-2 px-6 rounded-full duration-500`}
                >
                  <p className="text-base xl:text-2xl font-medium capitalize">
                    {filter.name}
                  </p>
                </div>
              );
            })}
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center gap-24 flex-wrap mb-12"
        >
          {projects &&
            projects.map((project, index) => {
              return <Card key={index + project.id} data={project} />;
            })}
        </div>

        <button
          data-aos="fade-down"
          onClick={handleViewMore}
          className="flex items-center gap-4 mt-12 py-2 px-4 rounded-full text-lg font-medium capitalize duration-300 hover:bg-gray-100"
        >
          view more work
          <span>
            <TbPlus />
          </span>
        </button>
      </div>
    </section>
  );
};

/* Sub Components */

const Card = ({ data }) => {
  return (
    <div className="relative w-full sm:w-[420px] h-auto rounded-xl shadow-2xl duration-500 hover:scale-110">
      <Image
        src={data.previewImage}
        alt={data.name}
        width="0"
        height="0"
        sizes="100vw"
        className="rounded-xl w-full h-[240px]"
      />

      <div className="bg-gradient-to-b from-white/60 to-black absolute h-full w-full rounded-xl  top-0 bottom-0 left-0 right-0 bg-dark p-4 duration-500 opacity-0 hover:opacity-70">
        <p className="absolute bottom-4 text-white font-medium text-lg">
          {data.name}
        </p>
      </div>
    </div>
  );
};

/* Exports */
export default FourthScreen;
