import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

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
          I specialize in crafting full-stack solutions, leveraging my expertise in both front-end and back-end technologies to create seamless and efficient web applications.
        </p>
        <div>
          <Link to="about">
          <button className="text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A3C6C4] hover:border-none hover:text-[#354649]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
