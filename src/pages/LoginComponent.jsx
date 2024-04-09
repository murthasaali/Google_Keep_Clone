import React from 'react'
import bg from '../assets/cool.jpg';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
    const nav =useNavigate()

  return (
<div className='h-screen w-full flex flex-col justify-center items-center text-black' style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',

      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>

        <form className='w-96 h-[400px] bg-stone-100 bg-opacity-40 flex flex-col justify-evenly items-center rounded-lg'>
            <p className='font-thin text-xl'> Login  now..</p>
            <input className='w-[80%] h-10 rounded-lg placeholder:text-xs px-4 ' placeholder='username.. '/>
            <input className='w-[80%] h-10 rounded-lg placeholder:text-xs px-4 ' placeholder='password.. '/>
            <button  onClick={()=>nav("/")}  className='px-4 py-1 bg-stone-950 rounded-full text-white'> Login  </button>
            <button  onClick={()=>nav("/registration")} className='text-xs  text-black'>i don't have any account</button>

        </form>
    </div>  )
}

export default LoginComponent