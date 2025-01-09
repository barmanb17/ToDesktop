import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


  return (
    
    <nav className='p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md'>
        <a href="#" id='brand' className='flex gap-2 items-center flex-1'>
            <img className='object-cover max-w-12 max-h-12' src="/public/assets/logo.png" alt="logo"/>
            <span className='text-lg font-medium font-display'>ToDesktop</span>
        </a>
        <div id='nav-menu' className='hidden lg:flex gap-12'>
            <a href="#" className='font-medium hover:text-primary '>Pricing</a>
            <a href="#" className='font-medium hover:text-primary '>Docs</a>
            <a href="#" className='font-medium hover:text-primary '>Changelog</a>
            <a href="#" className='font-medium hover:text-primary '>Blogs</a>
            <a href="#" className='font-medium hover:text-primary '>Login</a>
        </div>
        <div className='hidden lg:flex flex-1 flex-row items-center  justify-end'>
        <button className='flex gap-2 items-center border-2 border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600 font-medium'>
            <img src="/public/assets/image.png" alt="" />
            <span>Electron Developers</span>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
        </div>
        <button className='p-2 lg:hidden' onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} className='text-gray-600' />
        </button>
            
        <div className={`fixed z-10 lg:hidden bg-white inset-0 p-3 ${isMenuOpen ? '' : 'hidden'}`}>
            <div className='flex justify-between'>
            <a href="#" id='brand' className='flex gap-2 items-center'>
            <img className='object-cover max-w-12 max-h-12' src="/public/assets/logo.png" alt="logo"/>
            <span className='text-lg font-medium font-display'>ToDesktop</span>
            </a>

            <button className='p-2' onClick={handleMenu} >
            <FontAwesomeIcon icon={faXmark} />
            </button>
            </div>

            <div className='mt-6'>
          <a href="#" className='font-medium hover:text-primary hover:bg-gray-100 m-3 p-3 block rounded'>Pricing</a>
          <a href="#" className='font-medium hover:text-primary hover:bg-gray-100 m-3 p-3 block rounded'>Docs</a>
          <a href="#" className='font-medium hover:text-primary hover:bg-gray-100 m-3 p-3 block rounded'>Changelog</a>
          <a href="#" className='font-medium hover:text-primary hover:bg-gray-100 m-3 p-3 block rounded'>Blogs</a>
          <a href="#" className='font-medium hover:text-primary hover:bg-gray-100 m-3 p-3 block rounded'>Login</a>
        </div>
        <div className='h-[1px] bg-gray-300'></div>
        <button className='w-full mt-4 flex gap-2 items-center  px-6 py-4 rounded-lg hover:bg-gray-100 font-medium'>
            <img src="/public/assets/image.png" alt="" />
            <span>Electron Developers</span>
        </button>

        </div>
         
    </nav>  
  )
}

export default Navbar