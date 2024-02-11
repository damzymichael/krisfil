import {useEffect, useReducer, useRef, useState} from 'react';
import logo from '../assets/logo-bg-removed.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import Button from './Button';

//Change background color, on scroll
function Navbar() {
  const [height, setHeight] = useState(0);
  const [navOpen, toggleNavOpen] = useReducer(state => !state, false);
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (headerRef.current) setHeight(headerRef.current.offsetHeight);
  }, [height]);
  return (
    <div className='relative'>
      <header
        className={`bg-bg flex justify-between items-center fixed border border-[#ada6b9c5] rounded-3xl  ${
          navOpen ? 'rounded-b-none' : ''
        } w-[95%] sm:w-4/5 top-1 left-1/2 -translate-x-1/2 pr-3 sm:pr-2 z-10`}
        ref={headerRef}
      >
        <a href='#'>
          <img src={logo} alt='Krisfil Logo' className='w-12 aspect-square' />
        </a>
        <nav className='text-sm hidden sm:block'>
          <ul className='flex gap-3'>
            <li className='hover:text-acc'>
              <a href='#about-us'>About</a>
            </li>
            <li className='hover:text-acc'>
              <a href='#our-services'>Services</a>
            </li>
            <li className='hover:text-acc'>
              <a href='#gallery'>Gallery</a>
            </li>
            <li className='hover:text-acc'>
              <a href='#testimonials'>Reviews</a>
            </li>
          </ul>
        </nav>
        <img
          src={navOpen ? close : menu}
          alt='menu icon'
          className='w-8 block sm:hidden'
          onClick={toggleNavOpen}
        />
        <a href='#contact-us' className='hidden sm:block'>
          <Button>Contact Us</Button>
        </a>

        {navOpen && (
          <nav className='bg-bg fixed w-full top-[2.9rem] left-1/2 -translate-x-1/2 z-30 sm:hidden rounded-b-3xl'>
            <ul className='flex flex-col gap-3 p-4'>
              <li className='hover:text-acc'>
                <a href='#about-us' onClick={toggleNavOpen}>
                  About
                </a>
              </li>
              <li className='hover:text-acc'>
                <a href='#our-services' onClick={toggleNavOpen}>
                  Services
                </a>
              </li>
              <li className='hover:text-acc'>
                <a href='#gallery' onClick={toggleNavOpen}>
                  Gallery
                </a>
              </li>
              <li className='hover:text-acc'>
                <a href='#testimonials' onClick={toggleNavOpen}>
                  Reviews
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Navbar;
