import Logistics from '../../assets/Logistics.png'
import Fashion from '../../assets/Fashion.png'
import Landing from '../../assets/Modern-Landing.png'
import Urbane from '../../assets/Urbane.png'
import Thestore from '../../assets/Thestore.png'
import Easybank from '../../assets/Easybank.png'

function ProjectCards() {
  return (
    <div>
        <section className='min-h-screen relative bg-[#0f0f11] text-white pb-10'>
            <div className='md:px-24 md:py-24 px-2 py-16 md:flex md:space-x-5 
            md:space-y-0 space-y-3'>
                <div className='md:max-w-sm min-w-screen rounded overflow-hidden
                transform  transition duration-500 hover:scale-110 cursor-pointer'>
                    <img src={Logistics} alt="" className='w-full' />
                    <div className='px-6 py-4 bg-[#191919] text-white'>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Logistics Page
                        </div>
                        <p className='text-sm group-hover:text-white'>
                            A Landing page that displays goods and makes product delivery services
                            easy for clients. 
                        </p>

                        <a href="https://crystals-logistics.netlify.app/"
                        target="_blank">
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3 text-sm
                            rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                    
                </div>
                <div className='md:max-w-sm min-w-screen rounded overflow-hidden
                transform transition duration-500 hover:scale-110 cursor-pointer'>
                    <img src={ Fashion } alt="" className='w-full' />
                    <div className='px-6 py-4 bg-[#191919] text-white'>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Chungi Fashion 
                        </div>
                        <p className='text-sm group-hover:text-white'>
                            A Fashion Blog Landing page developed for fashion freaks to get
                            fashion updates. Page owned by Chungi Fashion.
                        </p>

                        <a href="https://alist-fashion.netlify.app/" target = '_blank'>
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3 
                            text-sm rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                    
                </div>

                <div className='md:max-w-sm min-w-screen rounded overflow-hidden
                transform  transition duration-500 hover:scale-110 cursor-pointer'>
                    <img src={ Landing } alt="" className='w-full' />
                    <div className='px-6 py-4 bg-[#191919] text-white '>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Landing Page
                        </div>
                        <p className='text-sm group-hover:text-white'>
                            Modern Landing page given as a task from frontend Mentor, to
                            proof my level of competence as a frontend Developer
                        </p>

                        <a href="https://modern-lp.netlify.app/"
                        target='_blank'>
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3  text-sm
                            rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* row 2 card 2 */}
            <div className='md:px-24 px-2 md:flex md:space-x-5 
            md:space-y-0 space-y-3'>
                <div className='md:max-w-sm min-w-screen rounded overflow-hidden
                transform  transition duration-500 hover:scale-110 cursor-pointer'>
                    <img src={Urbane} alt="" className='w-full' />
                    <div className='px-6 py-4 bg-[#191919] text-white'>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Urbane Foods
                        </div>
                        <p className='text-sm group-hover:text-white'>
                            A Restaurant Website that allows customers to order foods at their convienience.
                        </p>

                        <a href="https://urbane-foods.netlify.app/"
                        target="_blank">
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3 text-sm
                            rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                    
                </div>
                <div className='md:max-w-sm min-w-screen rounded overflow-hidden
                transform transition duration-500 hover:scale-110 cursor-pointer'>
                    <img src={ Easybank } alt="" className='w-full' />
                    <div className='px-6 py-4 bg-[#191919] text-white'>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            Easy Bank
                        </div>
                        <p className='text-sm group-hover:text-white'>
                            A Bank Landing Page given as a task from the freecodecamp community.
                        </p>

                        <a href="https://the-easybank.netlify.app/" target = '_blank'>
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3 
                            text-sm rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                    
                </div>

                <div className='md:max-w-sm min-w-screen rounded overflow-hidden
                transform  transition duration-500 hover:scale-110 cursor-pointer'>
                    <img src={ Thestore } alt="" className='w-full' />
                    <div className='px-6 py-4 bg-[#191919] text-white '>
                        <div className='font-bold md:text-xl text-xs mb-2'>
                            The Store
                        </div>
                        <p className='text-sm group-hover:text-white'>
                            The Store is an e-commerce application that allows customers add and view product.
                        </p>

                        <a href="https://the-store-b3c99.web.app/login"
                        target='_blank'>
                        <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3  text-sm
                            rounded-md' type='btn'>
                                View Project
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProjectCards