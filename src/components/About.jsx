import React from "react";
import KGimage from "../assets/KGimage.png";

export const About = () => {
  return (
    <div name="about" className="w-full pt-40 md:h-screen bg-[#1B4242] text-[#9EC8B9]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid mb-10 sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Karina, nice to meet you. Please take a look around. </p>
            <img className="mt-4 w-full max-w-[300px] mx-auto block sm:max-h-[600px] sm:flex sm:items-center sm:w-auto" src={KGimage} alt="" />
          </div>
          <div className="text-[#9EC8B9]">
            <p>
              As I transition into the dynamic realm of full stack web development, I bring with me a diverse background in health administration, where my focus centered on Revenue Cycle Management analysis.
            </p>

            <p className="mt-4">
              During my tenure at Flatiron Health, a prominent software development company, I sharpened my analytical skills and refined my ability to optimize processes, fostering operational efficiency. Fueled by a deep-seated passion for innovation and technology, I'm excited to channel my expertise into web development, seamlessly merging my healthcare insights with the exhilarating challenges of this field.
            </p>

            <p className="mt-4">
              With a solid foundation in problem-solving and an unwavering commitment to excellence, I am poised to embark on this transformative journey. My goal is to build seamless digital solutions that positively impact lives, driven by my passion for coding and my relentless pursuit of growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
