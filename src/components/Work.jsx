import React from 'react';
import ConcertFinder from '../assets/ConcertFinder.png';
import WorldCook from '../assets/WorldCook.png';
import WeatherDash from '../assets/WeatherDash.png';
import NoteTaker from '../assets/NoteTaker.png';
import SchedulePlanner from '../assets/SchedulePlanner.png';
import PasswordGenerator from '../assets/PasswordGenerator.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#020307] content-divv'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#01D5A2]'>
            Work
          </p>
          <p className='py-6'>Here are some of my projects</p>
        </div>

    {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ConcertFinder})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#020307] tracking-wider'>
              Bard An Interactive Concert Finder
              </span>
              <div className='pt-8 text-center'>
                <a  href='https://jeanvictoire.github.io/Bard-The-Concert-Finder/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/dkempen98/concert-finder'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorldCook})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#020307] tracking-wider'>
              World-Cookbook
              </span>
              <div className='pt-8 text-center'>
                <a href='https://atlas-chef-cookbook.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/GorillaJxnes/world-cookbook'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WeatherDash})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#020307] tracking-wider'>
              Weather Dashboard
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jeanvictoire.github.io/Weather-Dashboard/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/JeanVictoire/Weather-Dashboard'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NoteTaker})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#020307] tracking-wider'>
              Note Taker
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jv-note-taker.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/JeanVictoire/NOTE-TAKER'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SchedulePlanner})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Daily Schedule planner
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jeanvictoire.github.io/Daily-Schedule-planner/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/JeanVictoire/Daily-Schedule-planner'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PasswordGenerator})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#020307] tracking-wider'>
              PASSWORD GENERATOR
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jeanvictoire.github.io/JAVASCRIPT-PASSWORD-GENERATOR/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/JeanVictoire/JAVASCRIPT-PASSWORD-GENERATOR'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:text-[#01D5A2]'>
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