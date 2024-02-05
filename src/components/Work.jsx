import React from "react";
import WorkImg from "../assets/workimg.png";

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

        </div>
      </div>
    </div>
  );
};

export default Work;
