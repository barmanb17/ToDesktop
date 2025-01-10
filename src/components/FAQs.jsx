import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const FAQs = () => {
  const faqData = [
    {
      id: 'faq-1',
      question: 'Is ToDesktop for me?',
      answer:
        'What depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.',
    },
    {
      id: 'faq-2',
      question: 'How does ToDesktop work?',
      answer:
        'ToDesktop allows you to package your web app and make it available as a downloadable desktop application for Windows, macOS, and Linux.',
    },
    {
      id: 'faq-3',
      question: 'Is ToDesktop free to use?',
      answer:
        'Yes, ToDesktop is free for personal and small-scale commercial use. For larger-scale commercial use, a subscription is required.',
    },
    {
      id: 'faq-4',
      question: 'What platforms does ToDesktop support?',
      answer:
        'ToDesktop supports packaging apps for Windows, macOS, and Linux, allowing your web app to run as a native desktop application on these platforms.',
    },
    {
      id: 'faq-5',
      question: 'How do I get started with ToDesktop?',
      answer:
        'To get started, simply follow our documentation on how to package your web app. We provide a straightforward setup and build process to guide you through the steps.',
    },
    {
      id: 'faq-6',
      question: 'Is there support for ToDesktop?',
      answer:
        'Yes, ToDesktop provides both community and professional support to help you with any issues or questions you might encounter while using the platform.',
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32">
      <h2 className="text-5xl leading-normal sm:font-semibold max-w-2xl">FAQs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
        {faqData.map(({ id, question, answer }) => (
          <div key={id} className="group rounded-xl border border-gray-200 bg-gray-50">
            <dt
              className="flex justify-between p-6 items-center cursor-pointer"
              onClick={() => toggleFAQ(id)}
              aria-controls={id}
            >
              <p className="font-semibold text-lg items-center">{question}</p>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`transition-transform ${openFAQ === id ? 'rotate-0' : '-rotate-180'}`}
              />
            </dt>
            <dd
              className={`p-6 text-lg font-light mt-2 transition-all ${openFAQ === id ? '' : 'hidden'}`}
              id={id}
            >
              {answer}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
