import React from 'react'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Github from '../../assets/Vector.svg'
import Footer from '../../Components/Footer/Footer'


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
                    <ul className='flex space-x-3 pt-2'>
                        <li>
                            <a href="https://twitter.com/_iamclement_">
                                <img src={ Twitter } alt="Twitter-logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/azubuike.nnamdi1/">
                                <img src={ Facebook } alt="Facebook-logo" />
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.linkedin.com/in/clementnnamdi/">
                                <img src={ LinkedIn } alt="Linkedin-logo" />
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.instagram.com/iamclement_/">
                                <img src={ Instagram } alt="Instagram-logo" />
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://github.com/iamclement1">
                                <img src={ Github } alt="Github-logo" />
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