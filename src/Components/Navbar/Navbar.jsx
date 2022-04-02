import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Logo from '../../assets/Logo.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Github from '../../assets/Vector.svg'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav)
    }
    return (
    <div>
        <nav className='absolute w-full top-0 md:justify-between z-50 md:bg-transparent bg-[#0f0f11] text-white font-Poppins'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    <div className='flex-shrink-0 relative mr-auto'>
                        <Link to='/'>
                            <img src={ Logo } alt="Clement-Logo" />
                        </Link>                    
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4 text-black'>
                            <NavLink to='/' className='py-3 px-3 text-white 
                            hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-500 rounded-md transition duration-300 '>
                                Home
                            </NavLink>

                            <NavLink to='/about' className='py-3 px-3 text-white 
                            hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-500 rounded-md transition duration-300'>About Me</NavLink>

                            <NavLink to='/projects' className='py-3 px-3 text-white
                            hover:bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500
                            rounded-md transition duration-300'>
                                Projects
                            </NavLink>

                            {/* <NavLink to='/portfolio' className='py-3 px-3 text-white 
                            hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-500 rounded-md transition duration-300'>Portfolio</NavLink> */}

                            {/* <NavLink to='/resume' className='py-3 px-3 text-white 
                            hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-800 rounded-md transition duration-300'>Resume</NavLink> */}
                        </div>
                    </div>
                    <div className='-mr-2 flex md:hidden'>
                        <button type='button' onClick={handleNav} className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md 
                        text-gray-400 hover:text-white focus:outline-none' aria-controls='mobile-menu' aria-expanded='false'>
                            <span className='sr-only'>Open main meunu</span>
                            {!showNav ? (
                                <svg className='block h-6 w-6' 
                                xmlns='http://www.w3.org/2000/svg' fill='none' 
                                viewBox='0 0 24 24' stroke='currentcolor' 
                                aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' 
                                    strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
                                </svg>
                            ) : (
                                <svg className='block h-6 w-6' 
                                mlns='http://www.w3.org/2000/svg' fill='none' 
                                viewBox='0 0 24 24' stroke='currentcolor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition show={showNav} enter='transition ease-out duration-200 transform' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' 
            leave='transition ease-in duration-75 transform' 
            leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                {(ref) => (
                    <div className='md:hidden' id='mobile-menu'>
                        <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <NavLink to='/' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-500 transition duration-300'>Home</NavLink>

                            <NavLink to='/about' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-500 transition duration-300'>About Me</NavLink>

                            <NavLink to='/projects' className='block py-3 px-8 text-white
                            hover:bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500
                            transition duration-300'>Projects</NavLink>

                            {/* <NavLink to='/portfolio' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-500 transition duration-300'>Portfolio</NavLink> */}
{/*                             
                            <NavLink to='/resume' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-300 via-purple-500 
                            to-purple-500 transition duration-800'>Resume</NavLink> */}

                            <NavLink to='/projects' className='block py-3 px-8 text-white
                            hover:bg-gradien'></NavLink>
                            
                            <NavLink to='/getintouch' className='py-6 px-8 transition duration-300'>
                                <button className='bg-gradient-to-r from-pink-400 via-purple-500
                                to-purple-500 text-white md:py-4 md:px-6 px-2 py-3 
                                text-xs rounded-sm' type='btn'>Get in touch</button>
                            </NavLink>

                            <div className='text-white text-2xl cursor-pointer flex'>
                                <ul className='flex px-8 pt-5 space-x-5'>
                                    <li><a href="https://twitter.com/_iamclement_">
                                        <img src={ Twitter } alt="Twitter-logo" />
                                        </a></li>

                                        <li><a href="https://web.facebook.com/azubuike.nnamdi1/">
                                        <img src={ Facebook } alt="Facebook-icon" />
                                        </a></li>

                                        <li><a href="https://www.linkedin.com/in/clementnnamdi/">
                                            <img src={ LinkedIn } alt="Linkedin-logo" />
                                        </a></li>

                                        <li><a href="https://www.instagram.com/iamclement_/">
                                            <img src={ Instagram } alt="Instagram-logo" />
                                        </a></li>

                                        <li><a href="https://github.com/iamclement1">
                                            <img src={ Github } alt="Github-logo" />
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    </div>);
};

export default Navbar;
