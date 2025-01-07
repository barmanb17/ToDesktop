import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <main className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
      <div className='max-w-4xl mx-auto px-6 pb-32 flex flex-col'>
        <div className='flex my-6 gap-2 mt-32 items-center border-2 border-yellow-200 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition-all  group'>
          <div className='w-2 h-2 border bg-yellow-400 rounded-full border-yellow-600'></div>
          <p className='font-display font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
          <FontAwesomeIcon icon={faArrowRight} className='text-yellow-600 group-hover:translate-x-1 transition-all duration-300' />
        </div>
      </div>
      {/* Heading */}
      <h1>Web app to desktop app in minutes</h1>
      <p>Take our web app codebase and transform it into a cross platform desktop app with native functionality</p>
    </main>
  )
}

export default Hero