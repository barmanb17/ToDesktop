import { faGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32">
        <div className='rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8'>
            <a href="#" className=' font-light font-display'>Documentation</a>
            <div className='flex gap-8 text-xl'>
            <FontAwesomeIcon icon={faSquareTwitter} className='text-gray-600 hover:text-gray-900' />
            <FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-gray-900' />
            </div>
            
            <a href="#" id='brand' className='flex gap-2 items-center flex-1'>
            <img className='object-cover max-w-12 max-h-12' src="/public/assets/logo.png" alt="logo"/>
            <span className='text-lg font-medium font-display'>ToDesktop</span>
        </a>
        </div>
        <div className='flex gap-2 items-center flex-col mt-8'>
            <div className='flex flex-row items-center gap-4'>
            <img className='w-6 h-6' src="/assets/logoengage.png" alt="" />
            <p className='text-gray-600'>Engagenow.tech</p>
            </div>

            <p className='gap-6 text-sm text-gray-400 '>2025 ToDesktop, Inc. All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer