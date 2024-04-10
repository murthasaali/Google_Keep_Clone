import React, { useState } from "react";
import bg from "../assets/cool.jpg";
import SideBar from "../components/sideBar";
import { BiCloudUpload, BiImage } from "react-icons/bi";
import { LuRedo2, LuUndo2 } from "react-icons/lu";
import man from '../assets/hero.png'
import a from '../assets/a.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import {AnimatePresence, motion} from "framer-motion"
import painting from "../assets/paint.png";
function LandingPageComponent() {
  const [dropDown, setDrpdownOpen] = useState(false);
  const [theme, setTheme] = useState("bg-stone-50");
  const [selectedId, setSelectedId] = useState(null)
  const titles = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'];


  return (
    <div
      className="w-full flex flex-col justify-start items-end md:px-28  px-0 h-screen relative text-black"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SideBar />

      <div className="  md:w-[70%] w-full h-[75%] overflow-x-hidden bg-stone-100 bg-opacity-40  mt-20   absolute gap-4 flex  flex-col overflow-y-hidden justify-start  items-start">
      <div className="w-full h-full  relative overflow-x-hidden bg-opacity-40   p-3   gap-4 flex  flex-col overflow-y-scroll justify-start  items-start">
      <h1 className="font-thin text-4xl">Create Your Note </h1>
   <div className="w-full flex justify-strat">
    
   <div
          className={`md:w-[60%] w-full  p-3 h-auto  flex justify-between flex-col  rounded-xl ${theme}`}
        >
          <div className="flex justify-between w-full relative">
            <input
              className=" h-10 w-[60%] outline-none  bg-transparent px-3 text-2xl fond-bold"
              placeholder="title"
            />
            <button
              className=" bg-black h-10 flex justify-center items-center rounded-full w-10  relative"
              onClick={() => setDrpdownOpen(!dropDown)}
            >
              <img className="h-7 w-7  hover:scale-110" src={painting} />
            </button>
            {dropDown && (
              <div className="absolute top-11 z-[3] h-16 md:w-96 w-auto right-0 rounded-2xl flex-col item-center  justify-center px-3 items-center gap-1 rounded-tr-none flex bg-stone-100 border">
<div className="w-full h-fit text-xs text-black">color Your theme </div>
                <div className="w-full flex gap-2">
                <button
                  onClick={() => setTheme("bg-stone-50")}
                  className="w-8 h-8 hover:scale-105 border bg-white rounded-full hover:border "
                ></button>
                <button
                  onClick={() => setTheme("bg-red-200")}
                  className="w-8 h-8 hover:scale-105 border bg-red-300 rounded-full hover:border "
                ></button>
                <button
                  onClick={() => setTheme("bg-green-200")}
                  className="w-8 h-8 hover:scale-105 border bg-green-200 rounded-full hover:border "
                ></button>
                <button
                  onClick={() => setTheme("bg-cyan-200")}
                  className="w-8 h-8 hover:scale-105 border bg-cyan-200 rounded-full hover:border "
                ></button>
                <button
                  onClick={() => setTheme("bg-violet-200")}
                  className="w-8 h-8 hover:scale-105 border bg-violet-300 rounded-full hover:border "
                ></button>
                <button
                  onClick={() => setTheme("bg-yellow-100")}
                  className="w-8 h-8 hover:scale-105 border bg-yellow-100 rounded-full hover:border "
                ></button>
                <button
                  onClick={() => setTheme("bg-orange-100")}
                  className="w-8 h-8 hover:scale-105 border bg-orange-200 rounded-full hover:border "
                ></button>
                <button
                  onClick={() => setTheme("bg-stone-400")}
                  className="w-8 h-8 hover:scale-105 border bg-stone-400 rounded-full hover:border "
                ></button>
                </div>
              </div>
            )}
          </div>

          <textarea
            className=" h-10 w-[100%] text-xs bg-transparent outline-none px-3 placeholder:text-xs "
            placeholder="Take a note "
          />
          <div className="w-full gap-3 p-3 rounded-full flex justify-between">
            <div className="flex gap-2">
              {" "}
              <div className="text-white bg-stone-600 px-3 py-1 text-balance flex gap-2 rounded-full text-xl">
                <LuUndo2 />
                <LuRedo2 />
              </div>
              <button className="text-white bg-black px-3 py-1 text-balance  rounded-full text-xl">
           <BiImage className="hover:scale-110"/>
            </button>
            </div>
            
            <button className="text-white bg-black px-3 py-1 text-balance  rounded-full text-xl">
              <BiCloudUpload  className="hover:scale-110 transition-all duration-300"/>
            </button>
          </div>
        </div>

        <img src={man} className="h-64 w-44 hidden md:flex filter drop-shadow-xl "/>
        <div className="w-60 h-full  relative md:flex hidden">
            <img className="w-10 h-10 absolute bottom-6 top-10" src={a}/>
            <img className="w-10 h-10 absolute top-2 right-5" src={gmail}/>
            <img className="w-10 h-10 absolute top-20 right-20" src={github}/>

        </div>

    </div> 

    <div className="w-full h-96 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-1">
  {titles.map((title, index) => (
    <div key={index} className="bg-red-100 md:p-3 p-1 rounded-lg md:h-32 h-20" layoutId={index} onClick={() => setSelectedId(index)}>
      <div className="px-3 w-fit md:text-xl text-md font-thin bg-black rounded-full text-white">
        {title}
      </div>
    </div>
  ))}
</div>

<AnimatePresence>
  {selectedId !== null && (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setSelectedId(null)}
      className="w-full h-full flex justify-center items-center fixed backdrop-blur-sm top-0 left-0 z-[978] overflow-x-hidden"
    >
      <div className="w-[300px] h-[200px] bg-stone-100 rounded-xl border p-4">
        <h2>{titles[selectedId]}</h2>
        <button >Close</button>
      </div>
    </motion.div>
  )}
</AnimatePresence>


        


      </div>
      </div>
    </div>
  );
}

export default LandingPageComponent;
