import React, { useRef, useEffect } from 'react';

const FeatureLine = () => {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  const line1Ref = useRef(null);

  useEffect(() => {
    // Set up intersection observer to trigger on scroll
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
        element.style.transform = `translateX(${totalTranslate}px)`;  
      };

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    };


    const cleanupLine1 = setupIntersectionObserver(line1Ref.current, true, 0.8);


    return () => {
      cleanupLine1();
    };
  }, []);

  return (
    <div className='px-6 py-12 max-w-8xl mt-4 mx-auto lg:px-8 lg:mt-4'>
      <div className='border-2 rounded-lg overflow-hidden flex justify-center p-4'>
        <div className='flex gap-8 p-6'  ref={line1Ref}>
          <h3 className='my-0 whitespace-nowrap mx-2 text-2xl font-semibold'>Download Analytics</h3>
          <span> ● </span>
          <h3 className='my-0 whitespace-nowrap mx-2 text-2xl font-semibold'>Download Analytics</h3>
          <span> ● </span>
          <h3 className='my-0 whitespace-nowrap mx-2 text-2xl font-semibold'>Costom Menus</h3>
          <span> ● </span>
          <h3 className='my-0 whitespace-nowrap mx-2 text-2xl font-semibold'>Multi-window support</h3>
          <span> ● </span>
          <h3 className='my-0 whitespace-nowrap mx-2 text-2xl font-semibold'>Trays</h3>
          <span> ● </span>
          <h3 className='my-0 whitespace-nowrap mx-2 text-2xl font-semibold'>Deep Linking</h3>
          <span> ● </span>
          <h3 className='my-0 whitespace-nowrap mx-2 text-2xl font-semibold'>Download Analytics</h3>
          <span> ● </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureLine;
