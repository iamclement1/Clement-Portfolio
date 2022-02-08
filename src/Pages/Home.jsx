import React from 'react';
import Icon from '../assets/Character Icon.svg';
import Image from '../assets/Home-Image.png'
import Footer from '../Components/Footer';

const Home = () => {
    return (
    <div className='font-Poppins'>
        <section className='relative flex min-h-screen bg-[#0f0f11]'>
            <div className='flex flex-col items-center md:flex-row-reverse'>
                <div className='md:w-2/5 md:px-0 pt-8 md:pt-0'>
                    <img src={ Image } alt="Clement-Image" />
                </div>

                <div className='relative text-white md:w-3/5 items-center justify-center
                mx-auto p-3'>
                    <div className='flex pt-4 text-sm items-center md:px-16'>
                        <img src={ Icon } alt="profile-icon" />
                        <span className='pl-2'>Looking for a Web Developer.</span>
                    </div>
                    <div className='md:w-5/7 md:pl-16 pt-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
                        <h1 className='md:text-6xl text-2xl font-extrabold'>HI, I AM</h1>
                        <h1 className='md:text-6xl text-3xl pt-2 font-extrabold'>AZUBUIKE CLEMENT</h1>
                        <p className='text-white text-sm md:text-xl md:w-5/6 pt-2'>
                            A Web Developer from West Africa, with over 3 years of experience. I also have basic knowledge in UI/UX Design and Graphics Design which serves as
                            a bonus. </p>
                    </div>

                    <div className='flex md:w-5/7 md:pl-16 pt-4 space-x-5'>
                        <button className='bg-gradient-to-r from-pink-500 via-purple-500 
                        to-indigo-500 text-white md:py-5 md:px-8 px-3 py-4 text-sm rounded-md' type='btn'>Get in touch</button>
                        <button className='bg-transparent outline outline-gradient-to-r from outline-pink-500 via-purple-500 to-indigo-600 text-white md:py-4 
                        md:px-8 px-3 py-4 text-sm rounded' type='btn'>View Resume</button>
                    </div>

                    <Footer/>
                </div>
            </div>
        </section>
    </div>
    
    );
};

export default Home;

