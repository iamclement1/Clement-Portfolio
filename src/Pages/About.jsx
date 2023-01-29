import React from 'react';
import AboutImage from '../assets/About-Image.png'
import Footer from '../Components/Footer/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from '../assets/Character Icon.svg';
import Typical from 'react-typical';


const About = () => {
    return (
        <div>
            <section className='relative flex min-h-screen bg-[#0f0f11]'>

                <div className='flex flex-col md:justify-between items-center md:flex-row-reverse'>
                    <div className='md:w-2/5 md:px-0 pt-8 md:pt-0'>
                        <LazyLoadImage src={AboutImage} alt="About Image" />
                    </div>

                    <div className='md:w-3/5 relative text-white md:justify-center md:p-16 p-3'>
                        <div className='flex text-sm items-center'>
                            <div className='md:w-2/7 md:justify-center p-1'>
                                <h1 className='md:text-6xl text-2xl font-extrabold'>
                                    ABOUT ME
                                </h1>
                                <div className='flex pt-4 text-sm items-center'>
                                    <LazyLoadImage src={Icon} alt="profile-icon" className='pr-2' />
                                    <p>Looking for a {' '}
                                        <Typical
                                            loop={Infinity}
                                            wrapper='b'
                                            steps={[
                                                'Front-End Developer?',
                                                1000,
                                                ''
                                            ]}
                                        />
                                    </p>

                                </div>
                                <p className='leading-loose md:pt-8 pt-3'>I'm a Front-end Developer, with a year and 6 months of industrial experience. Been building stuffs on the low, while documenting my experience and new technologies. </p>

                                <p className='pt-5'>
                                    Have a strong understanding with JavaScript, JQuery, CSS framework, and ReactJs. In addition, I have basic knowledge of PHP, and it's framework (Laravel).
                                </p>

                                <p className='pt-5 mb-5'>You can find me at the gym, at the beach 🏖 or at tech meetups and conferences around Nigeria in my free time.</p>
                                <a href="https://drive.google.com/file/d/1oXPh2HcyHSqCjsZbHFXJjL4vDjcYwWoL/view?usp=sharing" target="_blank">
                                    <button className='bg-transparent outline outline-gradient-to-r from outline-pink-300 via-purple-500 to-purple-600 text-white
                            md:py-5  md:px-8 px-3 py-4 text-sm rounded-sm ' type='btn'>
                                        View Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
