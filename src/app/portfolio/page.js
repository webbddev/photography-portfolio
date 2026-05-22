'use client';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Image1 from '../../img/portfolio/1.png';
import Image2 from '../../img/portfolio/2.png';
import Image3 from '../../img/portfolio/3.png';
import Image4 from '../../img/portfolio/4.png';

import { motion } from 'framer-motion';
import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';

export default function Portfolio() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start lg:justify-center gap-x-24 text-center lg:text-left pt-32 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <b> Enim nobis aspernatur amet quae.</b> Nemo quia assumenda,
              voluptatibus deleniti porro tempore officia quas molestias ex,
              quae, quaerat quidem. Accusantium, autem inventore!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              assumenda ipsum repudiandae quia nostrum quis nulla nisi alias
              vero, ipsa obcaecati hic? Vel, possimus error consequuntur beatae
              aliquid ratione ea!
            </p>
            <Link href={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-2'
          >
            {/* image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <Image
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt='portfolio 1'
                priority
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <Image
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt='portfolio 2'
                priority
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <Image
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt='portfolio 3'
                priority
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <Image
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt='portfolio 4'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
