import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#020307] text-gray-300 pb-20 content-divv'>
      <div className='flex flex-col justify-center items-center w-full h-full pb-20'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-[#01D5A2]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-20'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi.<br></br> I'm Jean Victoire<br></br>Please look around.</p>
            </div>
            <div>
              <p>I’m a soon to be full-stack developer. I’m currently a student at The Ohio State University College full-stack Bootcamp. I’m currently learning figma for UI/UX dessign. I’m more focused on the Front-End and client side applications.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;