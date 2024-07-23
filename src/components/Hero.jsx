import React from "react";
import Avatar from "../assets/images/ProfilAvatar.jpeg";
const Hero = () => {
  return (
    <div className="flex felx-col items-center justify-center md:mt-20 mt-5">
      <div className="md:flex md:gap-8 md:items-center md:justify-center hidden md:block">
        <div className="w-60 h-60 overflow-hidden rounded-full flex-none">
          <img
            src={Avatar}
            alt="profil"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex-auto">
          <h1 className="text-3xl font-bold text-primary">
            With a deep passion for both{" "}
            <span className="text-secondary">front-end</span> and{" "}
            <span className="text-secondary">back-end development</span>, I
            transform <span className="text-secondary">innovative designs</span>{" "}
            into robust, full-stack systems, ensuring seamless user experiences
            through{" "}
            <span className="text-secondary">clean and efficient code.</span>
          </h1>
        </div>
      </div>
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
      </div>
    </div>
  );
};

export default Hero;
