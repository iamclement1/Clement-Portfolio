import React from 'react'
import Logistics from '../assets/Logistics.png'
import Fashion from '../assets/Fashion.png'
import Landing from '../assets/Modern-Landing.png'
import Footer from '../Components/Footer/Footer'

const Projects = () => {
    return (
    <div>
        <section className='min-h-screen relative bg-[#0f0f11] text-white'>
            <div className='md:px-24 md:py-24 px-2 py-16 md:flex md:space-x-5 md:space-y-0 space-y-3'>
                <div className='md:max-w-sm min-w-screen rounded overflow-hidden shadow-lg '>
                    <img src={Logistics} alt="" className='w-full' />
                    <div className='px-6 py-4 bg-gray-300 text-black'>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Logistics Page
                        </div>
                        <p className='text-sm group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit praesentium consequatur sequi minima,pit aliquid accusantium inventore atque, quaerat maiores quia!</p>

                        <a href="https://crystals-logistics.netlify.app/">
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3 text-sm
                            rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                    
                </div>
                <div className='md:max-w-sm min-w-screen rounded overflow-hidden shadow-lg '>
                    <img src={ Fashion } alt="" className='w-full' />
                    <div className='px-6 py-4 bg-gray-300 text-black'>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Chungi Fashion 
                        </div>
                        <p className='text-sm group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit praesentium consequatur sequi minima,pit aliquid accusantium inventore atque, quaerat maiores quia!</p>

                        <a href="https://alist-fashion.netlify.app/">
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3  text-sm
                            rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                    
                </div>

                <div className='md:max-w-sm min-w-screen rounded overflow-hidden shadow-lg '>
                    <img src={ Landing } alt="" className='w-full' />
                    <div className='px-6 py-4 bg-gray-300 text-black'>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Landing Page
                        </div>
                        <p className='text-sm group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit praesentium consequatur sequi minima,pit aliquid accusantium inventore atque, quaerat maiores quia!</p>

                        <a href="https://modern-lp.netlify.app/">
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3  text-sm
                            rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>

        <Footer />
    </div>
)
}

export default Projects
