'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. Core Lightbox Imports (Keep these)
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Project Portfolio Assets
import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';

// 2. NEW FIX: Custom Next.js Image Renderer Function
// This bypasses the broken plugin import completely and works flawlessly with Turbopack.
const NextJsImage = ({ slide, rect }) => {
  // Dynamically calculate responsive image scaling boundaries
  const width = Math.min(slide.width || Infinity, rect.width);
  const height = Math.min(slide.height || Infinity, rect.height);

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        src={slide.src}
        alt={slide.alt || ''}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 70vw'
        priority
        className='object-contain'
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
    {
      src: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Editorial Portrait - Fine Art',
    },
    {
      src: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop',
      alt: 'Contemporary Fashion - Studio',
    },
    {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop',
      alt: 'Lifestyle Photography - Urban',
    },
    {
      src: 'https://images.unsplash.com/photo-1515698919056-f76accf3d938?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Cinematic Moment - Natural Light',
    },
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
              A curated showcase of moments, moods, and visual narratives.{' '}
              <b>
                My work spans across editorial portraiture, contemporary
                fashion, and lifestyle photography
              </b>
              , with a strong focus on natural light, clean aesthetics, and
              genuine expressions. Each gallery tells a unique story of
              connection, form, and character.
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
                className='relative w-full aspect-[3/4] bg-accent overflow-hidden shadow-sm rounded-sm cursor-pointer group'
              >
                <Image
                  className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes='(max-width: 768px) 50vw, 25vw'
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
        render={{ slide: NextJsImage }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        }}
      />
    </motion.section>
  );
}
