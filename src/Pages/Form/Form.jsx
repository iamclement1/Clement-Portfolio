import React, {useState} from 'react'
import Button from '../../Components/Button/Button'
import SocialIcon from '../SocialIcon/SocialIcon'

const Form = () => {
    return (
    <div>
        <section>
            <div className='pt-8 md:flex md:flex-row items-center md:space-x-8'>
                <div className='md:w-2/4 '>
                    <form action="https://usebasin.com/f/07debcc2e2a0"
                    className='md:px-0 px-2' method='POST'>
                        <div className='md:flex md:flex-row items-center md:space-x-2'>
                            <input type="text" name='name' id='name' autoComplete='name'
                            placeholder='Name' required 
                            className='appearance-none md:rounded-md rounded-sm md:p-3 p-2 bg-transparent border border-purple-800 md:w-1/2 
                            w-full hover:border-pink-800 focus:outline-none' />

                            <input type="email" name='email' id='email' autoComplete='email'
                            placeholder='Email' required className='appearance-none md:rounded-md
                            rounded-sm md:w-1/2 w-full md:mt-0 mt-4
                            md:p-3 p-2 bg-transparent border border-purple-800 
                            hover:border-pink-800 focus:outline-none'/>

                        </div>
                        
                        <div className='pt-4'>
                            <input type="text" name='text' id='text' placeholder='Subject' required
                            className='appearance-none md:rounded-md rounded-sm md:p-3 
                            p-2 w-full bg-transparent
                            border border-purple-800 hover:border-pink-800 focus:outline-none' />
                        </div>

                        <div className='pt-4'>
                            <textarea name="message" id="message" cols="44" rows="5" placeholder='Message' required className='md:p-3 p-2 bg-transparent
                            md:rounded-md rounded-sm border border-purple-800
                            hover:border-pink-800 w-full'>

                            </textarea>
                        </div>
                        <Button/>
                    </form>
                </div>
                <div className='grid grid-cols-1 divide-x-3 divide-white border-white'></div>
                <SocialIcon/>
            </div>
        </section>
    </div>
  )
}

export default Form
