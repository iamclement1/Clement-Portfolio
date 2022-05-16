import React from 'react';
import AboutImage  from '../assets/About-Image.png'
import Footer from '../Components/Footer/Footer';

const About = () => {
    return (
    <div>
        <section className='relative flex min-h-screen bg-[#0f0f11]'>
            <div className='flex flex-col md:justify-between items-center md:flex-row-reverse'>
                <div className='md:w-2/5 md:px-0 pt-8 md:pt-0'>
                    <img src={ AboutImage } alt="About Image" />
                </div>

                <div className='md:w-3/5 relative text-white md:justify-center md:p-16 p-3'>
                    <div className='flex text-sm items-center'>
                        <div className='md:w-2/7 md:justify-center p-1'>
                            <h1 className='md:text-6xl text-2xl font-extrabold'>
                            ABOUT ME
                            </h1>
                            <p className='leading-loose md:pt-8 pt-3'>I'm a Front End Engineer with a keen eye for detail, beautiful design, and a determination to deliver the highest quality. I always try to better myself with every project I work on ☀️. I describe myself as a passionate developer who loves coding, open-source, and the web platform ❤️. The main areas of my expertise are HTML(5), CSS(3) and JavaScript (jQuery), SASS, Bootstrap, Tailwind, and ReactJs. </p>

                            <p className='pt-4'>Aside from my job, I like to create and contribute to open-source projects. That helps me learn a ton of new stuff, grow as a developer and support other open-source projects. </p>

                            <p className='pt-4'>You can find me at the gym, at the beach 🏖 or at tech meetups and conferences around Nigeria in my free time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
    );
};

export default About;
