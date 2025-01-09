import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCode} from '@fortawesome/free-solid-svg-icons' 
import React from 'react'

const Testimonials = () => {
  return (
    <div className='px-6 py-12 max-w-7xl mt-4 mx-auto lg:px-8 lg:mt-4'>
       <h2 className="text-5xl sm:font-semibold mb-14">Customer stories</h2>
       <div className='rounded-xl border flex flex-col lg:flex-row items-end'>
        {/* Left part */}
         <div className='flex flex-col gap-12 p-8'>
            <div className='h-4 w-fit'>
               <img src="/assets/asset 44.svg" alt="" />
            </div>
            <h3 className='font-display font-medium text-xl leading-relaxed'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
            <div className='flex gap-3 flex-wrap'>
              <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 text-yellow-800 px-3 py-1 rounded-md'>
                 <FontAwesomeIcon icon={faCheck} className='text-yellow-800'/>
                 <span className='font-display font-medium'>Chromeless UI</span>
              </div>

              <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 text-yellow-800 px-3 py-1 rounded-md'>
                 <FontAwesomeIcon icon={faCheck} className='text-yellow-800'/>
                 <span className='font-display font-medium'>Native spellcheck</span>
              </div>

              <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 text-yellow-800 px-3 py-1 rounded-md'>
                 <FontAwesomeIcon icon={faCheck} className='text-yellow-800'/>
                 <span className='font-display font-medium'>Task time in menubar</span>
              </div>

              <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 text-yellow-800 px-3 py-1 rounded-md'>
                 <FontAwesomeIcon icon={faCheck} className='text-yellow-800'/>
                 <span className='font-display font-medium'>Notification count in the dock</span>
              </div>

              <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 text-yellow-800 px-3 py-1 rounded-md'>
                 <FontAwesomeIcon icon={faCheck} className='text-yellow-800'/>
                 <span className='font-display font-medium'>Global hotkey to create task</span>
              </div>
            </div>
            <p className='text-lg font-light text-gray-500'>“ToDesktop provided us with a <span className='text-gray-800'>polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className='text-gray-800'>new and improved features</span> to our customers within days.”</p>
            {/* user card */}
            <div className='flex gap-4'>
                <div className='w-12 '>
                    <img src="/assets/asset 45.jpeg" alt="" className='rounded-[50%]'/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-display font-medium'>Zeb Evans</h3>
                    <p className='text-gray-500 '>Founder & CEO, ClickUP</p>
                </div>
            </div>
         </div>
         {/* Right part */}
         <div>
            <img src="/assets/asset 46.png" alt="" className='pl-8' />
         </div>
       </div>
       

       <div class="flex flex-col lg:flex-row justify-between gap-4 mt-20">
                <div class="rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
                    <div class="rounded-2xl p-6 bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                              <FontAwesomeIcon icon={faCode} className='text-indigo-800'/>
                            </div>
                            <h3 class="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div class="flex gap-4">
                            <div class="flex">
                                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="/assets/asset 47.png" alt="" />
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="/assets/asset 48.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
                    <div class="rounded-2xl p-6 bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={faCode} className='text-indigo-800'/>
                            </div>
                            <h3 class="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div class="flex gap-4">
                            <div class="flex">
                                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="/assets/asset 47.png" alt="" />
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="/assets/asset 48.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
                    <div class="rounded-2xl p-6 bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={faCode}/>
                            </div>
                            <h3 class="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div class="flex gap-4">
                            <div class="flex">
                                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="/assets/asset 47.png" alt="" />
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="/assets/asset 48.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
   
    </div>
  )
}
export default Testimonials