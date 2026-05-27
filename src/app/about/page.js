'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import WomanImg from '../../img/about/woman.png';
import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';

export default function About() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section min-h-screen flex items-center justify-center bg-white py-24 md:py-32 md:pb-16 lg:py-0'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto relative px-6 md:px-12 lg:px-0'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-y-12 md:gap-y-16 lg:gap-x-12 xl:gap-x-16 3xl:gap-x-28 text-center lg:text-left mx-auto max-w-4xl lg:max-w-5xl xl:max-w-7xl 3xl:max-w-[90rem] 4xl:max-w-[110rem]'>
          {/* image container */}
          <div className='w-full lg:w-1/2 max-w-md md:max-w-2xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-4xl order-2 lg:order-0 overflow-hidden shadow-sm rounded-sm'>
            <Image
              src={WomanImg}
              alt='about woman'
              priority
              className='w-full h-auto object-cover'
            />
          </div>

          {/* text container */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='w-full lg:w-1/2 z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About me</h1>

            <p className='mb-8 md:mb-12 max-w-md md:max-w-2xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] leading-relaxed text-gray-700 text-base md:text-lg lg:text-base'>
              I believe that a great photograph is more than just a
              well-composed shot; it’s a captured feeling, a fleeting moment
              frozen in time. My journey with photography started with a simple
              fascination: how light interacts with human emotion.{' '}
              <b>
                Over the years, this fascination has grown into a lifelong
                passion for visual storytelling and editorial portraiture.
              </b>
              <br />
              <br />
              My approach is deeply personal. I don’t just take pictures; I
              collaborate with you to capture your authentic self. Whether it’s
              a raw studio portrait, a dynamic fashion shoot, or a quiet
              cinematic moment, my goal is always the same: to create timeless
              imagery that speaks volumes without saying a word.
            </p>

            <Link
              href={'/portfolio'}
              className='btn 3xl:scale-125 3xl:origin-left'
            >
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
