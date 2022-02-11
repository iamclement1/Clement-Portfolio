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

            <div className='relative md:w-3/5 w-full border border-red-800'>
              <div className='md:pl-16'>
                <h1 className='md:text-4xl text-2xl md:p-0 p-3 md:pt-0 pt-8 font-black md:pb-8'>
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

                  <div className=''>
                    <div className='md:flex md:space-x-10'>
                      <div className='md:p-0 p-3 border border-red-800 md:space'>
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 pt-6 justify-center md:text-xl'>
                          KwaraBuild
                        </h1>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 pt-1 justify-center md:text-xs text-sm'>
                          Feb. 2022 till date
                        </p>
                      </div>

                      <div className='md:p-0 p-3 border border-red-700'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam? Quos, ex eum officiis nulla repudiandae magni. Doloribus, iusto! Accusantium nesciunt aut pariatur deserunt labore doloribus repudiandae, quo dolorum odio laborum voluptate corporis hic eos magnam veritatis similique quidem dignissimos ea, iure cum praesentium maxime nostrum laudantium officiis? Quas dignissimos impedit architecto id dicta magnam sequi esse corporis illo voluptate quia nobis nulla eaque, soluta ullam ab odit mollitia officia distinctio ipsum adipisci fugit quo a incidunt? Facere nulla id suscipit odio cupiditate quasi labore, tenetur eaque! Aliquid iure veritatis, deleniti dolore esse architecto doloremque reprehenderit temporibus dolorum ducimus facere maxime cumque quidem odit.

                        </p>
                      </div>
                    </div>
                  </div>
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
