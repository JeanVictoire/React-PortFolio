import React from 'react'
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#01D5A2]'>Hello, I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#fffefe]'>
          Koffi Jean Victoire
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#01D5A2]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#c1c4cf] py-4 max-w-[700px]'>
          I’m a soon to be full-stack developer. I’m currently a student at The Ohio State University College full-stack Bootcamp. I’m currently learning figma for UI/UX dessign. I’m more focused on the Front-End and client side applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#01D5A2] hover:border-[#01D5A2] hover:text-black'>
          <Link to='work' smooth={true} duration={500}>
          View Projects
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
        
    </div>
  )
}

export default Home