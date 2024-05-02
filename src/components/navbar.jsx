import React from "react";
import profile from '../assets/profile.jpg'
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="w-full h-20  backdrop-blur-sm flex  justify-between px-10 items-center absolute z-[999]">
      <div className="w-40 h-full flex justify-center text-3xl items-center ">
        <p className="text-red-100">Note</p>
      </div>
      <div className="w-[250px] h-12 flex justify-start items-center overflow-hidden gap-2 px-3  rounded-full bg-stone-100 bg-opacity-40 ">
        <CiSearch className="text-xl"/>
        <input className="w-full h-10 bg-transparent outline-none"/>
        
      </div>
      <div className="w-auto h-full flex items-center justify-center gap-2">
        <p className="text-xs text-white">username</p>
        <img src={profile} className="h-12 rounded-full w-12 "/>

      </div>
    </div>
  );
}

export default Navbar;
