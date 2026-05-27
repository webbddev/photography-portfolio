'use client';

import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';

const faqData = [
  {
    question: 'What types of photography do you specialize in?',
    answer:
      'I specialize in high-end portrait, fashion, and lifestyle photography. My goal is to capture authentic moments and the unique personality of every subject I work with.',
  },
  {
    question: 'How far in advance should I book my session?',
    answer:
      'To ensure availability, I recommend booking at least 4-6 weeks in advance. However, I sometimes have last-minute openings, so feel free to reach out and check!',
  },
  {
    question: 'Do you provide the raw unedited files?',
    answer:
      'I do not provide raw or unedited files. Part of the value I provide is my professional editing and artistic vision. You will receive high-resolution, professionally edited images that reflect my signature style.',
  },
  {
    question: 'How long does it take to receive the final photos?',
    answer:
      'The standard turnaround time for a portrait session is 2-3 weeks. For larger projects or commercial work, it may take up to 4 weeks depending on the volume of images.',
  },
  {
    question: 'Do you travel for photo shoots?',
    answer:
      'Absolutely! I love traveling for projects. Travel fees vary based on the destination and duration of the shoot. Contact me for a custom quote for your specific location.',
  },
  {
    question: 'What should I wear for my session?',
    answer:
      'I always recommend wearing something you feel confident and comfortable in. Neutral tones and solid colors often work best, but we can discuss a specific mood board once your session is booked.',
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className='border-b border-primary/20 py-4 lg:py-6'>
      <button
        onClick={onClick}
        className='flex justify-between items-center w-full text-left'
      >
        <span className='text-lg md:text-xl lg:text-2xl font-primary font-semibold text-primary'>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className='text-2xl lg:text-3xl'
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden'
          >
            <p className='pt-4 pb-2 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl'>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section min-h-screen flex items-center justify-center bg-white py-24 md:py-32 lg:py-0'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto px-6 md:px-12 lg:px-0'
      >
        <div className='flex flex-col lg:flex-row items-start justify-between gap-y-12 lg:gap-x-12 xl:gap-x-24 mx-auto max-w-4xl lg:max-w-5xl xl:max-w-7xl 3xl:max-w-[90rem] 4xl:max-w-[110rem]'>
          {/* text container */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left'
          >
            <h1 className='h1'>FAQ</h1>
            <p className='text-gray-700 text-base md:text-lg lg:text-xl 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-secondary mb-6'>
              Everything you need to know about working with me. If you have
              other questions, feel free to reach out.
            </p>
          </motion.div>

          {/* faq list container */}
          <motion.div
            initial={{ opacity: 0, y: '50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50%' }}
            transition={transition1}
            className='w-full lg:w-2/3'
          >
            <div className='flex flex-col'>
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
