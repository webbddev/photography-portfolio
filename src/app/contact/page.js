'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import WomanImg from '../../img/contact/contact_me.png';
import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';

export default function Contact() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section min-h-screen flex items-center justify-center bg-white pb-0 pt-24 md:py-32 md:pb-0 lg:py-0 relative overflow-hidden isolate'
    >
      {/* Background Graphic Accent strip */}
      <div className='hidden lg:block bg-[#eef9f5] absolute bottom-0 left-0 right-0 top-1/3 z-0 pointer-events-none'></div>

      <div className='container mx-auto relative px-6 md:px-12 lg:px-0 z-10 lg:h-screen lg:flex lg:items-center'>
        {/* text & form & img wrapper */}
        <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center gap-y-12 md:gap-y-16 lg:gap-x-12 xl:gap-x-16 3xl:gap-x-28 text-center lg:text-left mx-auto max-w-4xl lg:max-w-5xl xl:max-w-7xl 3xl:max-w-[90rem] 4xl:max-w-[110rem] w-full lg:h-full lg:pt-28'>
          {/* TEXT & FORM CONTAINER */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start max-w-md md:max-w-2xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl lg:self-center lg:pb-12'
          >
            <h1 className='h1'>Contact me</h1>

            <p className='mb-8 md:mb-10 lg:mb-12 text-gray-700 text-base md:text-lg lg:text-base 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-secondary'>
              I am open for my new business adventure.
            </p>

            <form className='flex flex-col gap-y-5 w-full'>
              <div className='flex flex-col md:flex-row gap-x-6 gap-y-5 w-full'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] text-base 3xl:text-[20px] 4xl:text-[24px]'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] text-base 3xl:text-[20px] 4xl:text-[24px]'
                  type='text'
                  placeholder='Your email address'
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 mb-4 placeholder:text-[#757879] text-base 3xl:text-[20px] 4xl:text-[24px]'
                type='text'
                placeholder='Your message'
              />

              <button className='btn lg:mb-0 3xl:scale-125 3xl:origin-left self-center lg:self-start'>
                Send it
              </button>
            </form>
          </div>

          {/* IMAGE CONTAINER - OPTIMIZED FOR LARGE HEIGHT SCREEN DISPLAY */}
          {/* 1. Changed max-w bounds on large viewports so the box can stretch wider to handle proportional asset height scaling.
            2. Lifted image max height rules (`lg:max-h-[92vh] 3xl:max-h-[95vh]`) to fill the bottom viewport completely.
          */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ ...transition1, duration: 1.5 }}
            className='w-full lg:w-1/2 max-w-md md:max-w-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-5xl flex justify-center lg:justify-end lg:self-end items-end h-full'
          >
            <Image
              src={WomanImg}
              alt='contact woman'
              priority
              className='w-full h-auto object-contain object-bottom max-h-[40vh] md:max-h-[45vh] lg:max-h-[92vh] 3xl:max-h-[95vh] 4xl:max-h-[120vh]'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
