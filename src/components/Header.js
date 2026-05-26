'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Socials from './Socials';
import LogoAleftina from '../img/header/Color logo - no background.svg';
import MobileNav from './MobileNav';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        isActive
          ? 'bg-white/70 backdrop-blur-md py-[15px] shadow-sm'
          : 'bg-transparent py-[30px]'
      } fixed w-full px-[30px] lg:px-[100px] z-30 h-[70px] lg:h-[80px] 3xl:h-[110px] 4xl:h-[130px] flex items-center transition-all duration-300`}
    >
      {/* FIXED WRAPPER: Changed flex-col to a permanent flex-row, and forced items-center at all times */}
      <div className='flex flex-row w-full justify-between items-center'>
        {/* logo - stays on the left edge regardless of screen width */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          href={'/'}
          className='max-w-[160px] md:max-w-[200px] 3xl:max-w-[280px] 4xl:max-w-[340px] py-1 pl-1 transition-all duration-300'
        >
          <Image
            src={LogoAleftina}
            alt='logo'
            priority
            className='w-full h-auto'
          />
        </Link>

        {/* nav - initially hidden, but appears on desktop mode */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='hidden xl:flex gap-x-8 2xl:gap-x-10 3xl:gap-x-13 font-semibold text-base 2xl:text-[18px] 3xl:text-[24px] tracking-[0.02em] transition-all duration-300'
        >
          <Link href={'/'} className='text-grey hover:text-primary transition'>
            Home
          </Link>
          <Link
            href={'/about'}
            className='text-grey hover:text-primary transition'
          >
            About
          </Link>
          <Link
            href={'/portfolio'}
            className='text-grey hover:text-primary transition'
          >
            Portfolio
          </Link>
          <Link
            href={'/contact'}
            className='text-grey hover:text-primary transition'
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* socials */}
      <Socials />
      {/* mobile navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
