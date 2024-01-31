import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#A7D7C5]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#5C8D89]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Karina Garcia
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#5C8D89]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-black py-4 max-w-[700px]">
          I'm a full-stack developer eager to innovate and create seamless
          digital solutions with a passion for coding and problem-solving.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-[#5C8D89]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
