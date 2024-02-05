import React from "react";
import WorkImg from "../assets/workimg.png";
import NoteTaker from '../assets/notetakerimg.png';
import WorkDayScheduler from '../assets/workdayschedulerimg.png'
import EmployerTracker from '../assets/employetrackerimg.png'
import TextEditor from '../assets/texteditimg.png'
import SocialNetwork from '../assets/socialnetworkimg.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#9EC8B9]  bg-[#1B4242]">
      <div className="max-w-[-1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#9EC8B9] border-white">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Front-End Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://codyccl.github.io/WellmatesProject-1/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/CodyCCL/WellmatesProject-1.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
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
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Express: Note Taker
              </span>
              <div className="pt-8 text-center">
                <a href="https://note-taker-expressjs-challenge-0b10c4818e05.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/note-taker.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
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
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Third-Party API: Work Day Scheduler
              </span>
              <div className="pt-8 text-center">
                <a href="https://kgarcia7.github.io/work-day-scheduler/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/work-day-scheduler.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${EmployerTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SQL: Employee Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://app.screencastify.com/v2/watch/4uSIyUAhIRqnhcJ7qaEj">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/sql-employee-tracker.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TextEditor})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                PWA: Text Editor
              </span>
              <div className="pt-8 text-center">
                <a href="https://text-editor-pwa-9f1q.onrender.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/text-editor-PWA.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
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
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MongoDB: Social Network API
              </span>
              <div className="pt-8 text-center">
                <a href="https://drive.google.com/file/d/1Wt5RlZpFKFsUYApS3ZlJplp2qfMbvvtX/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kgarcia7/social-network-api-mongodb.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black">
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
