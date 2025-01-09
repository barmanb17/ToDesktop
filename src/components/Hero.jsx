import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileCode, faHandPointer, faLaptop } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <main className='min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent sm:pt-12'>
      {/* Div button section */}
      <div className='max-w-4xl mx-auto px-6 pb-32 flex flex-col sm:items-center sm:text-center'>
        <div className='flex my-6 gap-2 mt-24 items-center border-2 border-yellow-200 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition-all  group'>
          <div className='w-2 h-2 border bg-yellow-400 rounded-full border-yellow-600'></div>
          <p className='font-display font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
          <FontAwesomeIcon icon={faArrowRight} className='text-yellow-600 group-hover:translate-x-1 transition-all duration-300' />
        </div>

       {/* Hero features */}
        <div className='hidden sm:flex gap-8 my-6'>
          <div className='flex justify-center items-center gap-2 text-gray-500 font-medium'>
          <FontAwesomeIcon icon={faFileCode} />
          <p>Code Optional</p>
          </div>
          <div className='flex justify-center items-center gap-2 text-gray-500 font-medium'>
          <FontAwesomeIcon icon={faHandPointer} />
          <p>Drag & Drop builder</p>
          </div>
          <div className='flex justify-center items-center gap-2 text-gray-500 font-medium'>
          <FontAwesomeIcon icon={faLaptop} />
          <p>Windows, Mac, Linux</p>
          </div>
        </div>

       {/* Heading */}
        <h1 className='text-4xl font-display text-gray-800 font-semibold leading-snug mt-4 sm:text-6xl sm:leading-snug'>Web app to desktop app in minutes</h1>
        <p className='text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-700'>Take our web app codebase and transform it into a cross platform desktop app with native functionality</p>
         
        <div className='mt-12 flex flex-col sm:flex-row gap-4'>
            <button className='px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-lg border-2 border-blue-800 hover:bg-opacity-90'>Download Now</button>
            <button className=' px-8 py-3 font-semibold text-gray-700 bg-white border-2 rounded-lg border-gray-600 shadow-lg hover:border-gray-400'>Read docs</button>
        </div>
     </div>

    </main>
  )
}

export default Hero