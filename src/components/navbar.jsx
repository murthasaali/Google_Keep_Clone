import React from "react";
import profile from '../assets/profile.jpg'
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="w-full h-20  backdrop-blur-sm flex  justify-between md:px-10 px-3 items-center absolute z-[999]">
      
   
      <div className="md:w-[250px] w-[200px] h-12 flex justify-start items-center overflow-hidden gap-2 px-3  rounded-full bg-stone-100 bg-opacity-40 ">
        <CiSearch/>
        <input className="w-full h-10 bg-transparent"/>
        
      </div>
      <div className="w-auto h-full flex items-center justify-center gap-2">
        <p className="text-xs text-white">username</p>
        <img src={profile} className="h-12 rounded-full w-12 "/>

      </div>

    </div>
  );
}

export default Navbar;
