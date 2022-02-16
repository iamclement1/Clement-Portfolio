import React from 'react'
import Image from '../assets/Resume-Image.png'
import Astratech from './Experience/Astratech/Astratech'
import KwaraBuild from './Experience/KwaraBuild/KwaraBuild'
import WorkOva from './Experience/WorkOva/WorkOva'

const Resume = () => {
  return (
    <section className=''>
      <div className='font-Poppins'>
        <section className='relative bg-[#0f0f11] text-white min-h-screen'>
          <div className='flex flex-col items-center md:flex-row-reverse'>
            <div className='md:w-2/5 md:px-0 pt-8 md:pt-0'>
              <img src={Image} alt="Resume-Image" />
            </div>

            <div className='relative md:w-3/5 w-full'>
              <div className='md:pl-16'>
                <h1 className='md:text-4xl text-2xl md:p-0 p-3 md:pt-24 pt-8 font-black md:pb-8'>
                  RESUME
                </h1>
                <p className='md:text-xm text-sm md:p-0 p-3 md:w-3/5 w-3/5'>
                  Have a Project in mind? Let's talk about it
                </p>

                {/* WORK EXPERIENCE */}
        
                <div className='md:pt-12'>
                  <h1 className='md:text-xl text-xm md:p-0 p-3 font-medium md:pb-6'>
                    Work Experience
                  </h1>
                  <KwaraBuild/>
                  <WorkOva/>
                  <Astratech/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Resume
