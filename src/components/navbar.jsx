import React from "react";

function Navbar() {
  return (
    <div className="w-full h-20  backdrop-blur-sm flex justify-between px-10 items-center absolute z-[999]">
      <div className="w-40 h-full flex justify-center text-3xl items-center ">
        <p className="text-red-100">Note</p>
      </div>
      <div className="w-96 h-full "></div>
      <div className="w-auto h-full flex items-center justify-center gap-2">
        <p className="text-xs text-white">username</p>
        <div className="w-10 h-10 bg-stone-600 rounded-full"></div>

      </div>
    </div>
  );
}

export default Navbar;
