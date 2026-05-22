'use client';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WomanImg from '../../img/about/woman.png';
import { motion } from 'framer-motion';
import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';

export default function About() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-start lg:justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <Image src={WomanImg} alt='about woman' priority />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
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
            <Link href={'/portfolio'} className='btn'>
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
