import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 content-divv'>
        <form method='POST' action="https://getform.io/f/c04b67e4-9c32-4a7b-ab31-e1b45b319c33" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#01D5A2] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Feel free to contact me  - jeanthecoders@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#01D5A2]  hover:border-[#01D5A2]  px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact