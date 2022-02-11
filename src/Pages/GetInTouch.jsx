import React from 'react'
import Footer from '../Components/Footer'
import Form from './Form/Form'

const GetInTouch = () => {
    return (
    <div>
        <section className='relative bg-[#0f0f11] text-white min-h-screen md:pl-16
        
        pl-8 md:pt-38 pt-28 md:pb-24 pb-18'>
            <div className=''>
                <h1 className='md:text-5xl text-2xl font-black pb-8'>GET IN TOUCH</h1>
                <p className='text-sm md:w-full w-2/3'>Have any project in mind? Let's talk about it.</p>
            </div>
            <Form/>
        </section>
        <Footer/>
    </div>
    )
}

export default GetInTouch