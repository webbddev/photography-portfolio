'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. Core Lightbox Imports (Keep these)
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Project Portfolio Assets
import Image1 from '../../img/portfolio/1.png';
import Image2 from '../../img/portfolio/2.png';
import Image3 from '../../img/portfolio/3.png';
import Image4 from '../../img/portfolio/4.png';

import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';

// 2. NEW FIX: Custom Next.js Image Renderer Function
// This bypasses the broken plugin import completely and works flawlessly with Turbopack.
const NextJsImage = ({ slide, rect }) => {
  // Dynamically calculate responsive image scaling boundaries
  const width = Math.min(slide.width || Infinity, rect.width);
  const height = Math.min(slide.height || Infinity, rect.height);

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        src={slide.src}
        alt={slide.alt || ""}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 70vw"
        priority
        className="object-contain"
      />
    </div>
  );
};

export default function Portfolio() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  // Lightbox Control States
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const portfolioImages = [
    { src: Image1, alt: 'portfolio 1' },
    { src: Image2, alt: 'portfolio 2' },
    { src: Image3, alt: 'portfolio 3' },
    { src: Image4, alt: 'portfolio 4' },
  ];

  // Map files directly into slide configurations
  const slides = portfolioImages.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section min-h-screen flex items-center justify-center bg-white py-24 md:py-32 lg:py-0 relative overflow-hidden'
    >
      <div className='container mx-auto relative px-6 md:px-12 lg:px-0'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-x-12 xl:gap-x-16 3xl:gap-x-28 text-center lg:text-left mx-auto max-w-4xl lg:max-w-5xl xl:max-w-[75rem] 3xl:max-w-[90rem] 4xl:max-w-[110rem] w-full'>
          
          {/* TEXT CONTAINER */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='w-full lg:w-1/2 z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-8 md:mb-12 max-w-md md:max-w-2xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] leading-relaxed text-gray-700 text-base md:text-lg lg:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <b> Enim nobis aspernatur amet quae.</b> Nemo quia assumenda,
              voluptatibus deleniti porro tempore officia quas molestias ex,
              quae, quaerat quidem. Accusantium, autem inventore!
            </p>
            <Link
              href={'/contact'}
              className='btn mb-[10px] lg:mb-0 3xl:scale-125 3xl:origin-left'
            >
              Hire me
            </Link>
          </motion.div>

          {/* 2x2 Image Grid Layout */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full lg:w-1/2 max-w-md md:max-w-2xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-4xl grid grid-cols-2 gap-3 md:gap-4 lg:gap-2 3xl:gap-4'
          >
            {portfolioImages.map((image, i) => (
              <div 
                key={i}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className='relative w-full aspect-[4/3] bg-accent overflow-hidden shadow-sm rounded-sm cursor-pointer group'
              >
                <Image
                  className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                  src={image.src}
                  alt={image.alt}
                  priority={i < 2}
                />
                <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* OVERLAY LIGHTBOX OVERRIDE */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        // {/* 3. Pass our custom component function here */}
        render={{ slide: NextJsImage }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        }}
      />
    </motion.section>
  );
}