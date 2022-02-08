import React from 'react';

const Footer = () => {
    return (
    <div>
        <div className='md:absolute md:bg-transparent bg-[#0f0f11] flex-col md:flex-row 
        text-white flex text-xs md:text-xs md:w-5/7 w-full md:pl-16 pt-8 p-2 md:top-full
        md:z-50 '>
            <div className=' relative w-full pt-20 text-xs text-white'>
                <p>Copyright &copy; 2021 Clement | Designed by Phantom </p>
            </div>
        </div>
    </div>
    );
};

export default Footer;
