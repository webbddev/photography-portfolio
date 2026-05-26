'use client';

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import WomanImg from '../img/home/woman.png';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const MotionImage = motion(Image);

export default function Home() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      /* Removed overflow-hidden and changed min-h-screen adjustments */
      className='w-full min-h-screen relative flex flex-col justify-between lg:block bg-white'
    >
      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 0.9, y: 0 }}
        exit={{ opacity: 0, y: '-50%' }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='
          relative z-20
          w-full lg:w-auto
          flex flex-col justify-center items-center lg:items-start
          text-center lg:text-left
          pt-37 pb-12 lg:py-0
          px-6 lg:px-0
          lg:absolute lg:top-[50%] lg:-translate-y-1/2 xl:top-2/3
          lg:left-[6%] xl:left-[8%] 2xl:left-[10%] 3xl:left-[15%] 4xl:left-[15%]
          lg:translate-x-0 xl:translate-x-[5%] 2xl:translate-x-[10%] 3xl:translate-x-[5%]
        '
      >
        <h1 className='h1 capitalize'>
          content producer <br />& project manager
        </h1>
        <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
          Kishinev, MD
        </p>
        <Link href='/contact' className='btn mb-[30px]'>
          hire me
        </Link>
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition1}
        className='
          relative lg:absolute 
          bottom-0 lg:top-0 right-0 lg:right-10 
          w-full lg:w-[40%] xl:w-[45%] 
          h-[55vh] lg:h-screen
        '
      >
        {/* We keep overflow-hidden ONLY on the inner frame so the image hover zoom doesn't break layout */}
        <div className='relative h-full w-full overflow-hidden'>
          <MotionImage
            src={WomanImg}
            alt='woman image'
            fill
            priority
            sizes='(max-width: 1024px) 100vw, 45vw'
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            className='object-cover object-top'
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
