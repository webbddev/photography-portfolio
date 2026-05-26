'use client';

import { useContext } from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      /* Made margins scale beautifully on massive screens to keep separation from navigation links */
      className='hidden xl:flex ml-8 2xl:ml-16 3xl:ml-20 transition-all duration-300'
    >
      {/* 1. Applied dynamic font sizes (text-*) to scale vector icons proportionally.
        2. Expanded layout item tracking (gap-x-*) across ultra-wide monitors.
      */}
      <ul className='flex items-center gap-x-5 2xl:gap-x-6 3xl:gap-x-8 text-base 2xl:text-[18px] 3xl:text-[24px] 4xl:text-[28px] text-grey transition-all duration-300'>
        <li>
          <a
            href='http://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors duration-300'
          >
            <ImFacebook />
          </a>
        </li>
        <li>
          <a
            href='http://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors duration-300'
          >
            <ImTwitter />
          </a>
        </li>
        <li>
          <a
            href='http://www.pinterest.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors duration-300'
          >
            <ImPinterest />
          </a>
        </li>
        <li>
          <a
            href='http://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors duration-300'
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a
            href='http://www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors duration-300'
          >
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
