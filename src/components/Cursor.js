'use client';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

const Cursor = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      variants={cursorVariants}
      animate={cursorBG}
      className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
    ></motion.div>
  );
};

export default Cursor;
