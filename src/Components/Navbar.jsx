import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Logo from '../assets/Logo.svg'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav)
    }
    return (
    <div>
        <nav className='absolute w-full top-0 md:justify-between z-50 md:bg-transparent bg-black text-white font-Poppins'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    <div className='flex-shrink-0 relative '>
                        <Link to='/'>
                            <img src={ Logo } alt="Clement-Logo" />
                        </Link>                    
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <NavLink to='/' className='py-3 px-3 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 rounded-md transition duration-300'>Home</NavLink>
                            <NavLink to='/about' className='py-3 px-3 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 rounded-md transition duration-300'>About Me</NavLink>
                            <NavLink to='/' className='py-3 px-3 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 rounded-md transition duration-300'>Portfolio</NavLink>
                            <NavLink to='/' className='py-3 px-3 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 rounded-md transition duration-300'>Resume</NavLink>
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
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
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
                            <NavLink to='/' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 transition duration-300'>Home</NavLink>

                            <NavLink to='/about' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 transition duration-300'>About Me</NavLink>

                            <NavLink to='/' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 transition duration-300'>Portfolio</NavLink>
                            
                            <NavLink to='/' className='block py-3 px-8 text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 
                            to-indigo-500 transition duration-300'>Resume</NavLink>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    </div>);
};

export default Navbar;
