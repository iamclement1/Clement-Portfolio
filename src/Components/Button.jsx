import React from 'react'

const Button = () => {
    return (
    <div>
        <section>
            <div className='flex md:w-5/7 pt-8 space-x-5'>
                <button className='bg-gradient-to-r from-pink-400 via-purple-500 
                            to-purple-500 text-white md:py-4 md:px-8 px-3 py-4 text-sm 
                            md:rounded-md rounded-sm' type='btn'>
                    Send Message
                </button>

            </div>
        </section>
    </div>
  )
}

export default Button