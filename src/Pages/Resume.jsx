import React from 'react'
import Image from '../assets/Resume-Image.png'

const Resume = () => {
  return (
    <section>
      <div className='font-Poppins'>
        <section className='relative bg-[#0f0f11] text-white min-h-screen'>
          <div className='flex flex-col items-center md:flex-row-reverse'>
            <div className='md:w-2/5 md:px-0 pt-8 md:pt-0 min-h-screen'>
              <img src={Image} alt="Resume-Image" />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Resume
