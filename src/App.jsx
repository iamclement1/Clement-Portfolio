import { useState } from 'react'
import Logo from './assets/Logo.svg'
import './App.css'
import { Transition } from '@headlessui/react'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <nav className='relative bg-black text-white'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex md:justify-between w-full items-center'>
              <div className='flex-shrink-0'>
                <img src={ Logo } alt="Clement-Logo" />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4 font-xl'>
                  <a href="#" className='hover:bg-gray-500 text-white px-3 py-2'>
                    Home</a>
                  <a href="#" className='hover:bg-gray-500 text-white px-3 py-2'>
                    About Me</a>
                  <a href="#" className='hover:bg-gray-500 text-white px-3 py-2'>
                    Portfolio</a>
                  <a href="#" className='hover:bg-gray-500 text-white px-3 py-2'>
                    Résumé</a>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button type='button' className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white' aria-controls='mobile-menu' aria-expanded='true'>
                <span className='sr-only'>Open main menu</span>
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentcolor' aria-hidden='true'>
                  <path stroke-linecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
                </svg>
                <svg className='hidden h- w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentcolor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6l12 12'/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition show={isOpen} enter='transition ease-out duration-100 transform' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='transition ease-in duration-75 transform' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <a href="#" className='hover:bg-gray-800 text-white px-3 py-2 text-sm rounded-md font-medium'>Home</a>
                <a href="#" className='hover:bg-gray-800 text-white px-3 py-2 text-sm rounded-md font-medium'>Home</a>
                <a href="#" className='hover:bg-gray-800 text-white px-3 py-2 text-sm rounded-md font-medium'>Home</a>
                <a href="#" className='hover:bg-gray-800 text-white px-3 py-2 text-sm rounded-md font-medium'>Home</a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default App
