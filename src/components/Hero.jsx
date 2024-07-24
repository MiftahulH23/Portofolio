import React from "react";
import Avatar from "../assets/images/ProfilAvatar.jpeg";
const Hero = () => {
  return (
    <div className="flex felx-col items-center justify-center md:mt-20 mt-5">
      <div className="md:flex md:gap-8 md:items-center md:justify-center hidden md:block">
        <div className="w-60 h-60 overflow-hidden rounded-full flex-none border-2 border-primary">
          <img
            src={Avatar}
            alt="profil"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex-auto">
          <h1 className="text-3xl font-bold text-primary text-justify">
            With a deep passion for both{" "}
            <span className="text-secondary">front-end</span> and{" "}
            <span className="text-secondary">back-end development</span>, I
            transform <span className="text-secondary">innovative designs</span>{" "}
            into robust, full-stack systems, ensuring seamless user experiences
            through{" "}
            <span className="text-secondary">clean and efficient code.</span>
          </h1>
          <div className="flex gap-5 mt-5 items-center justify-center">
            <a
              href=""
              className="p-2 text-center bg-dark-blue rounded-2xl text-white font-semibold"
            >
              Explore My Project
            </a>
            <a
              href="https://read.cv/miftahul"
              className="px-4 py-2 text-center text-primary rounded-2xl border border-primary font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <h1 className="text-3xl font-bold text-primary">
          With a deep passion for both{" "}
          <span className="text-secondary">front-end</span> and{" "}
          <span className="text-secondary">back-end development</span>, I
          transform <span className="text-secondary">innovative designs</span>{" "}
          into robust, full-stack systems, ensuring seamless user experiences
          through{" "}
          <span className="text-secondary">clean and efficient code.</span>
        </h1>
        <a href="https://read.cv/miftahul" className="flex w-[50%] gap-3 px-4 py-2 border border-primary items-center justify-center rounded-xl mt-5">
          <a href="https://read.cv/miftahul" className="text-primary font-semibold text-lg">Resume</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-external-link stroke-primary size-5"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
