import React from 'react'
import Logistics from '../assets/Logistics.png'
import Button from '../Components/Button/Button'

const Projects = () => {
    return (
    <div>
        <section className='min-h-screen relative bg-[#0f0f11] text-white'>
            <div className='md:px-24 md:py-24 px-2 py-16'>
                <div className='md:max-w-sm min-w-screen rounded overflow-hidden shadow-lg '>
                    <img src={Logistics} alt="" className='w-full' />
                    <div className='group px-6 py-4 bg-gray-300 text-black 
                    hover:bg-purple-700 cursor-pointer'>
                        <div className='font-bold md:text-xl text-xs mb-2 group-hover:text-white'>
                            Logistics Page
                        </div>
                        <p className='text-sm group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit praesentium consequatur sequi minima,pit aliquid accusantium inventore atque, quaerat maiores quia!</p>
                    </div>
                    <Button />
                </div>
            </div>
        </section>
    </div>
)
}

export default Projects
