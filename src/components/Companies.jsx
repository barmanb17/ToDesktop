import React, { useEffect, useRef } from 'react';

const Companies = () => {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  // Refs for the lines
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const setupIntersectionObserver = (element, isLTR, speed) => {
      const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          window.addEventListener('scroll', scrollHandler);
        } else {
          window.removeEventListener('scroll', scrollHandler);
        }
      };

      const intersectionObserver = new IntersectionObserver(intersectionCallback);
      intersectionObserver.observe(element);

      const scrollHandler = () => {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
          totalTranslate = translateX + initialTranslateLTR;
        } else {
          totalTranslate = -(translateX + initialTranslateRTL);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;  // Corrected typo here
      };

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    };

    // Set up intersection observers for the lines
    const cleanupLine1 = setupIntersectionObserver(line1Ref.current, true, 0.15);
    const cleanupLine2 = setupIntersectionObserver(line2Ref.current, false, 0.15);
    const cleanupLine3 = setupIntersectionObserver(line3Ref.current, true, 0.15);

    // Cleanup on component unmount
    return () => {
      cleanupLine1();
      cleanupLine2();
      cleanupLine3();
    };
  }, []);
  return (
    <div>
       <div className='flex justify-center items-center gap-2'>
          <img className='translate-y-2' src="/src/assets/asset 2.svg" alt="arrow" />
          <span className='font-medium' >APPS POWERED BY TODESKTOP</span>
          <img className='translate-y-2 -scale-x-100'  src="/src/assets/asset 2.svg" alt="arrow" />
       </div>
       {/* Companies lines group */}

       <div className='flex flex-col mt-8 gap-4 overflow-hidden'>
        <div className='flex w-screen gap-4 -translate-x-48 transition-transform ease-linear'
        ref={line1Ref}
        >
            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300 md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>
        </div>
        {/* Line 2 */}
        <div className='flex gap-4 w-screen -translate-x-36 transition-transform ease-linear' 
        ref={line2Ref}
        >
            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>
        </div>
        {/* line 3 */}
        <div className='flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear' 
        ref={line3Ref}
        >
            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>

            <div className='flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-2 border-gray-300
            md:min-h-32 md:min-w-32'>
                <img className='w-12 h-12 md:w-16 md:h-16' src="/src/assets/asset 3.png" alt="" />
                <span className='text-[12px] md:text-[16px] font-semibold '>Unbounce</span>
            </div>
        </div>
       </div>
       </div>
       
  )
}

export default Companies;