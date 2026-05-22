'use client';
import { useContext } from 'react';
import Socials from './Socials';
import LogoAleftina from '../img/header/Color logo - no background.svg';
import MobileNav from './MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full py-[30px] px-[15px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          href={'/'}
          className='max-w-[200px] pl-1'
        >
          <Image src={LogoAleftina} alt='logo' priority />
        </Link>
        {/* nav - initially hidden, but appears on desktop mode */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='hidden xl:flex gap-x-12 font-semibold'
        >
          <Link
            href={'/'}
            className='text-[#696c6c6d] hover:text-primary transition'
          >
            Home
          </Link>
          <Link
            href={'/about'}
            className='text-[#696c6c6d] hover:text-primary transition'
          >
            About
          </Link>
          <Link
            href={'/portfolio'}
            className='text-[#696c6c6d] hover:text-primary transition'
          >
            Portfolio
          </Link>
          <Link
            href={'/contact'}
            className='text-[#696c6c6d] hover:text-primary transition'
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
