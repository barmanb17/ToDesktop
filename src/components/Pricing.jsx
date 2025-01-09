import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Pricing = () => {
  return (
    <div className='px-6 py-12 max-w-7xl mt-4 mx-auto lg:px-8 lg:mt-4'>
        <div className=''>
            <h2 className='text-5xl leading-normal'>Choose a plan thats fits your needs</h2>
            <div className='flex  flex-col lg:flex-row mt-6 gap-6'>
                <div className='border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50'>
                   <h3 className='text-4xl'>Free</h3>
                   <p className='text-lg font-light'>For personal use or testing your app before deploying to customers.</p>
                   <p className=''>KEY FEATURES</p>

                   <ul className='flex flex-col gap-3'>
                    <li className='flex flex-row items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='text-gray-800'/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faCheck}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faXmark}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faXmark}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                   </ul>

                   <button className='text-primary border px-8 py-3 rounded-lg hover:border-gray-800 font-display font-medium'>
                    Read Docs
                   </button>
                </div>

                <div className='border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50'>
                   <h3 className='text-4xl'>Essential</h3>
                   <p className='text-lg font-light'>For simple desktop apps.</p>
                   <p className='text-lg font-light'> <span className='text-2xl font-semibold'>$99</span>/month</p>
                   <p className=''>KEY FEATURES</p>

                   <ul className='flex flex-col gap-3'>
                    <li className='flex flex-row items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='text-gray-800'/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faCheck}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faXmark}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faXmark}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                   </ul>

                   <button className='text-primary border px-8 py-3 rounded-lg hover:border-gray-800 font-display font-medium'>
                    Read Docs
                   </button>
                </div>

                <div className='border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 relative lg:border-none lg:bg-slate-50'>
                    <p className='text-blue-800 text-sm bg-indigo-100 rounded-full px-4 py-2 font-display w-fit absolute top-0 right-8 -translate-y-1/2 font-semibold'>Most Popular</p>
                   <h3 className='text-4xl'>Professional</h3>
                   <p className='text-lg font-light'>For sophesticated desktop apps.</p>
                   <p className='text-lg font-light'> <span className='text-2xl font-semibold'>$99</span>/month</p>
                   <p className=''>KEY FEATURES</p>

                   <ul className='flex flex-col gap-3'>
                    <li className='flex flex-row items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='text-gray-800'/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faCheck}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faXmark}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faXmark}/>
                        <span className='text-xl font-light text-gray-600'>Free for persona l use</span>
                    </li>
                   </ul>

                   <button className='text-white bg-primary border px-8 py-3 rounded-lg hover:bg-opacity-90 font-display font-medium'>
                    Read Docs
                   </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Pricing