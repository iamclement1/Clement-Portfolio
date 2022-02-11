import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faLinkedinIn, faInstagram,
faGithubSquare } from '@fortawesome/fontawesome-free-brands'
import Footer from '../../Components/Footer'


const SocialIcon = () => {
    return (
    <div>
        <section className=' md:w-12/12 md:pt-0 pt-8'>
            <div>
                <div>
                    <p className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 font-semibold text-xl'>Phone</p>
                    <a href="tel:+2347034947199" className='md:text-xl text-sm'>+2347034947199</a>
                </div>
                <div>
                    <p className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 font-semibold text-xl pt-6'>Email</p>
                    <a href="mailto:iamnnamdiclement@gmail.com" className='md:text-xl text-sm'>iamnnamdiclement@gmail.com</a>
                </div>
                <div>
                    <p className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 font-semibold text-xl pt-6'>
                        Address
                    </p>
                    <p className='md:text-xl text-sm md:w-4/6'>Lane 2 With God Estate, Odo-Elewe, Ibadan, Oyo State, Nigeria.</p>
                </div>
                <div>
                    <p className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 font-semibold text-xl pt-6'>Social Media</p>
                    <ul className='flex space-x-3'>
                        <li>
                            <a href="https://twitter.com/_iamclement_">
                                <FontAwesomeIcon icon={ faTwitterSquare } className='cursor-pointer text-4xl'></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/azubuike.nnamdi1/">
                                <FontAwesomeIcon icon={ faFacebookSquare } className='cursor-pointer text-4xl'></FontAwesomeIcon>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.linkedin.com/in/clementnnamdi/">
                                <FontAwesomeIcon icon={ faLinkedinIn } className='cursor-pointer bg-white text-3xl text-black px-1 py-0.5 rounded-sm'></FontAwesomeIcon>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.instagram.com/iamclement_/">
                                <FontAwesomeIcon icon={ faInstagram } className='cursor-pointer bg-white text-black px-1 py-.5 text-4xl rounded-sm'></FontAwesomeIcon>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://github.com/iamclement1">
                                <FontAwesomeIcon icon={ faGithubSquare } className='cursor-pointer text-4xl'></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SocialIcon