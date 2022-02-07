import React from 'react';
import Icon from '../assets/Character Icon.svg'

const Home = () => {
    return (
    <div className='md:flex block md:justify-between'>
        <div className='flex flex-col-reverse'>
            <div className='flex items-center'>
                <img src={ Icon } alt="body-icon" />
                <p className='text-sm items-center'>Looking for a Web Developer</p>
            </div>
        </div>
        <div>Clement's image</div>
    </div>
    
    );
};

export default Home;
