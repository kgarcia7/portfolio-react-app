import React from "react";
import DataFinance from "../assets/datafinanceimg.png";
import NoteTaker from '../assets/notetakerimg.png';
import WorkDayScheduler from '../assets/workdayschedulerimg.png'
import Chow from '../assets/chowimg.png'
import TechBlog from '../assets/techblogimg.png'
import SocialNetwork from '../assets/socialnetworkimg.png'

const Work = () => {
  return (
    <div name="work" className="w-full pt-40 md:pt-0 md:h-screen bg-[#1B4242]">
      {/* Container */}
      <div className=" text-[#9EC8B9] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white text-[#9EC8B9]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">


          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${DataFinance})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-5">
              <span className="text-2xl font-bold text-white tracking-wider">
                React App: Data Finance 
              </span>
              <div className="pt-8 text-center">
                <a href="https://65d6c407d64de64cc433ff1b--data-finance-reactapp.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/data-finance-react-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${NoteTaker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-5">
              <span className="text-2xl font-bold text-white tracking-wider">
                Express: Note Taker
              </span>
              <div className="pt-8 text-center">
                <a href="https://note-taker-expressjs-challenge-0b10c4818e05.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/note-taker.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${WorkDayScheduler})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-5">
              <span className="text-2xl font-bold text-white tracking-wider">
                Third-Party API: Work Day Scheduler
              </span>
              <div className="pt-8 text-center">
                <a href="https://kgarcia7.github.io/work-day-scheduler/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/work-day-scheduler.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Chow})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-5">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN App: Chow Meal Service
              </span>
              <div className="pt-8 text-center">
                <a href="https://chow-6cdd847b467b.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/CodyCCL/Chow-Project-3.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TechBlog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-5">
              <span className="text-2xl font-bold text-white tracking-wider">
                MVC: Tech Blog
              </span>
              <div className="pt-8 text-center">
                <a href="https://kg-tech-blog-mvc-f80329782ede.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/tech-blog-mvc.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SocialNetwork})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-5">
              <span className="text-2xl font-bold text-white tracking-wider">
                MongoDB: Social Network API
              </span>
              <div className="pt-8 text-center">
                <a href="https://drive.google.com/file/d/1Wt5RlZpFKFsUYApS3ZlJplp2qfMbvvtX/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/social-network-api-mongodb.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
