import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Testimonials2 = () => {
  return (
        <div className='px-6 py-12 max-w-7xl mt-4 mx-auto lg:px-8 lg:mt-4'>
           <div className='rounded-xl  flex flex-col lg:flex-row bg-black pt-6 lg:pt-10'>
            {/* Left part */}
             <div className='flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8'>
                <span className='text-gray-400 font-display font-medium'>READY TO START BUILDING ?</span>
                <h2 className=' text-4xl lg:text-5xl font-semibold text-white leading-tight'>Create your desktop app for free*</h2>
                <p className='text-lg lg:text-xl font-light text-gray-300'>ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
                {/* Button */}
                <button className='bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex gap-4 justify-center items-center'>
                <FontAwesomeIcon icon={faDownload} className='text-white '/>
                    <span>Dawnload ToDesktop Builder</span>
                </button>
                <p className='text-gray-400 text-xs italic leading-tight '>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
             </div>
             {/* Right part */}
             <div className='lg:w-1/2'>
                <img src="/assets/asset 46.png" alt="" className='pl-8' />
             </div>
           </div>
    </div>
  )
}

export default Testimonials2