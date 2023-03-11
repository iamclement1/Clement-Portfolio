import React from 'react';
import Icon from '../assets/Character Icon.svg';
import Image from '../assets/Home-Image.png'
import PlaceholderImg from '../assets/PlaceholderImg.png'
import Footer from '../Components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import Typical from 'react-typical';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {


    return (
        <div className='font-Poppins'>
            <section className='relative flex min-h-screen bg-[#0f0f11]'>
                <div className='flex flex-col items-center md:flex-row-reverse'>
                    <div className='md:w-2/5 md:px-0 pt-8 md:pt-0 '>
                        <LazyLoadImage src={Image} alt="Clement-Image"
                            PlaceholderSrc={PlaceholderImg} />
                    </div>

                    <div className='relative text-white md:w-3/5 items-center justify-center
                mx-auto p-3'>
                        <div className='flex pt-4 text-sm items-center md:px-16'>
                            <LazyLoadImage src={Icon} alt="profile-icon" className='pr-2' />
                            <p>Looking for a {' '}
                                <Typical
                                    loop={Infinity}
                                    wrapper='b'
                                    steps={[
                                        'Front-End Developer?',
                                        3000,
                                        ''
                                    ]}
                                />
                            </p>

                        </div>
                        <div className='md:w-5/7 md:pl-16 pt-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500'>
                            <h1 className='md:text-6xl text-2xl font-extrabold'>
                                HI, I AM
                            </h1>
                            <h1 className='md:text-6xl text-3xl pt-2 font-extrabold uppercase'>
                                Nnamdi Azubuike</h1>
                            <p className='text-white text-sm md:text-xl md:w-5/6 
                        pt-3 leading-loose'>
                                I am an innovative frontend Engineer with professional experience in React, basic experience with Angular and Next.js, and familiarity with backend technologies.
                            </p>

                            <p className='text-white text-sm md:text-xl md:w-5/6 
                        pt-8 leading-loose'>
                                I also spend time documenting my learning process by researching and writing articles about frontend technologies on platforms like Hashnode and other general experiences on Medium.
                            </p>
                        </div>

                        <div className='flex md:w-5/7 md:pl-16 pt-12 space-x-5'>
                            <NavLink to='/getintouch'>
                                <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-500 text-white md:py-5 md:px-8 px-3 py-4 text-sm
                            rounded-md' type='btn'>Get in touch</button>
                            </NavLink>

                            <a href="https://drive.google.com/file/d/1oXPh2HcyHSqCjsZbHFXJjL4vDjcYwWoL/view?usp=sharing" target="_blank">
                                <button className='bg-transparent outline outline-gradient-to-r from outline-pink-300 via-purple-500 to-purple-600 text-white
                            md:py-5  md:px-8 px-3 py-4 text-sm rounded-sm ' type='btn'>
                                    View Resume
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>


    );
};

export default Home;

