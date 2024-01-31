import React from "react";
import KGimage from '../assets/KGimage.png'

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#A7D7C5] text-[#5C8D89]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white">About</p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Karina, nice to meet you. Please take a look around. </p>
              <img className='max-h-[500px] w-full h-screen' src={KGimage} />
            </div>
            <div className="text-black">
              <p >As a career changer transitioning into the dynamic realm of full stack web development, I bring a diverse background in health administration, with a particular focus on revenue cycle management analysis. With invaluable experience gained at Flatiron Health, a leading software development company, I've honed my analytical skills and cultivated a keen eye for optimizing processes and enhancing operational efficiency. Motivated by a passion for innovation and technology, I'm eager to leverage my expertise in a new capacity, merging my healthcare insights with the exciting challenges of web development. With a strong foundation in problem-solving and a relentless drive for excellence, I am poised to embark on this transformative journey, committed to crafting seamless digital solutions that positively impact lives.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;