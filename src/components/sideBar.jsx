import React from "react";
import bulb from "../assets/light.png";
import draw from "../assets/draw.png";
import trsh from '../assets/delete.png'
import bell from "../assets/notification.png"
function SideBar() {
  return (
    <div className="md:w-72 md:h-3/4 w-full h-20 absolute z-[100] md:flex  justify-end items-center  md:left-0  md:top-20 bottom-0 ">
      <div className="md:w-[90%] w-full h-full rounded-lg bg-stone-100 bg-opacity-40 flex justify-center   gap-5 items-center md:flex-col flex-row">
        <button
          className=" bg-black h-10 flex justify-center items-center rounded-full w-10  relative"
        >
          <img className="h-7 w-7  hover:scale-110" src={draw} />
        </button>
        <button
          className=" bg-black h-10 flex justify-center items-center rounded-full w-10  relative"
        >
          <img className="h-7 w-7  hover:scale-110" src={bulb} />
        </button>
        <button
          className=" bg-black h-10 flex justify-center items-center rounded-full w-10  relative"
        >
          <img className="h-7 w-7  hover:scale-110" src={trsh} />
        </button>
        <button
          className=" bg-black h-10 flex justify-center items-center rounded-full w-10  relative"
        >
          <img className="h-7 w-7  hover:scale-110" src={bell} />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
