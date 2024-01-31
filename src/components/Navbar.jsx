import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
   const [nav,setNav]= useState(false)
   const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#649dad] text-black-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "90px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburfer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes /> }
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a7c7d0]">
            <a className="flex justify-between items-center w-full text-black-300"
            href="/">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a7c7d0]">
            <a className="flex justify-between items-center w-full text-black-300"
            href="/">
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a7c7d0]">
            <a className="flex justify-between items-center w-full text-black-300"
            href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a7c7d0]">
            <a className="flex justify-between items-center w-full text-black-300"
            href="/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
