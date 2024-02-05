import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1B4242]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#9EC8B9]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Karina Garcia
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#9EC8B9]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#9EC8B9] py-4 max-w-[700px]">
          I'm a full-stack developer eager to innovate and create seamless
          digital solutions with a passion for coding and problem-solving.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A3C6C4] hover:text-[#354649]">
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
