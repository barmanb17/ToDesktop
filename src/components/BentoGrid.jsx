import React from 'react';

const BentoGrid = () => {
  // Data array to dynamically render grid items
  const gridItems = [
    {
      title: 'Native Notification',
      description: '',
      imageSrc: '/assets/asset 37.png',
      rowStart: 1,
      rowEnd: 3,
    },
    {
      title: 'Native Notification',
      description:
        'We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.',
      imageSrc: '/assets/asset 38.png',
      rowStart: 1,
      rowEnd: 4,
    },
    {
      title: 'Native Notification',
      description: '',
      imageSrc: '/assets/asset 37.png',
      rowStart: 1,
      rowEnd: 3,
    },
    {
      title: 'Native Notification',
      description:
        'We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.',
      imageSrc: '/assets/asset 38.png',
      rowStart: 3,
      rowEnd: 6,
    },
    {
      title: 'Native Notification',
      description: '',
      imageSrc: '/assets/asset 37.png',
      rowStart: 4,
      rowEnd: 6,
    },
    {
      title: 'Native Notification',
      description:
        'We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.',
      imageSrc: '/assets/asset 38.png',
      rowStart: 3,
      rowEnd: 6,
    },
  ];

  return (
    <div className="flex flex-col gap-6 px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32">
      <h2 className="text-5xl sm:font-semibold mb-14">ToDesktop handles the details</h2>
      <div
        className="lg:grid lg:grid-cols-3 lg:grid-rows-6 gap-6"
        style={{ gridTemplateRows: 'repeat(6, 1fr)' }}
      >
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`col-span-1 row-start-${item.rowStart} row-end-${item.rowEnd} group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200`}
            style={{
              gridRowStart: item.rowStart,
              gridRowEnd: item.rowEnd,
            }}
          >
            <div className="bg-white group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full gap-6 p-6 flex flex-col items-center">
              <h3 className="text-2xl">{item.title}</h3>
              {item.description && (
                <p className="text-lg text-center font-light">{item.description}</p>
              )}
              <img src={item.imageSrc} alt={item.title} className="mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
