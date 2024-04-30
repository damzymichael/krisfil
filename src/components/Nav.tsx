import {MenuIcon, BrandIconWhite} from './SVGs';

const Nav = () => {
  return (
    <header className='bg-black text-white py-1 px-3 fixed w-screen top-0 left-0 z-20 flex justify-between items-center'>
      <BrandIconWhite width={50} height={50} />
      <nav>
        <ul className='sm:flex gap-4 justify-center hidden'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Gallery</a>
          </li>
          <li>
            <a href='#'>Reviews</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </nav>
      <button className='sm:hidden'>
        <MenuIcon />
      </button>
    </header>
  );
};

export default Nav;
