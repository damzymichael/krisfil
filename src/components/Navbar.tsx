import {useReducer} from 'react';
import logo from '../assets/logo-bg-removed.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import Button from './Button';

//Change background color, on scroll
function Navbar() {
  const [navOpen, toggleNavOpen] = useReducer(state => !state, false);
  return (
    <header className='bg-bg flex justify-between items-center fixed border border-[#ada6b9c5] rounded-3xl w-[95%] sm:w-4/5 top-1 left-1/2 -translate-x-1/2 pr-3 sm:pr-2 z-10'>
      <a href='#'>
        <img
          src={logo}
          alt='Krisfil Logo'
          className='w-12 aspect-square'
          // onClick={() => {
          //   window.scrollTo(0, 0);
          // }}
        />
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
      <a href='#contact-us'>
        <Button addstyles='hidden sm:block'>Contact Us</Button>
      </a>
    </header>
  );
}

export default Navbar;
