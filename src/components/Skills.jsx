import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import MySql from "../assets/mysql.png";
import GraphQL from "../assets/graghql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen md:pt-0 pt-40 bg-[#1B4242]">
      {/* Container */}
      <div className="text-[#9EC8B9] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white text-[#9EC8B9]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with: </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img className="w-20 mt-5 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img className="w-20 mt-5 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img
              className="w-20 mt-5 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img
              className="w-20 mt-5 mx-auto"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img className="w-20 mt-5 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img className="w-20 mt-5 mx-auto" src={MySql} alt="MySQL icon" />
            <p className="my-4">MySQL</p>
          </div>

          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img className="w-20 mt-5 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">MongoDB</p>
          </div>

          <div className="shadow-md shadow-[#092635] hover:scale-110 duration-300">
            <img
              className="w-20 mt-5 mx-auto"
              src={GraphQL}
              alt="GraphQL icon"
            />
            <p className="my-4">GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
