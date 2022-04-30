import { useState } from 'react';
import { Link } from 'react-scroll';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from '../assets/img/logo.svg';

function NavBar() {
  const [isMobileViewDropdownOpen, setMobileViewDropdown] = useState(false);

  // handle function
  const handleMobileView = () =>
    setMobileViewDropdown(!isMobileViewDropdownOpen);
  return (
    <header>
      <div className='p-6 mx-auto'>
        {/* Flex container */}
        <div className='flex items-center justify-between'>
          <img src={Logo} alt='logo' />
          <div className='hidden md:flex space-x-6'>
            <Link className='hover:text-darkGrayishBlue' to='/'>
              Pricing
            </Link>
            <Link className='hover:text-darkGrayishBlue' to='/'>
              Product
            </Link>
            <Link className='hover:text-darkGrayishBlue' to='/'>
              About Us
            </Link>
            <Link className='hover:text-darkGrayishBlue' to='/'>
              Careers
            </Link>
            <Link className='hover:text-darkGrayishBlue' to='/'>
              Community
            </Link>
          </div>
          <a
            href='/'
            className='hidden md:block bg-brightRed 
          rounded-full p-3 px-6 text-white pt-2 hover:bg-brightRedLight'
          >
            Get Started
          </a>
        </div>
      </div>
      {/* Mobile view dropdown */}
      <div
        className='fixed md:hidden z-20 top-0 right-0 p-3'
        onClick={handleMobileView}
      >
        {isMobileViewDropdownOpen ? (
          <GrClose size={30} />
        ) : (
          <GiHamburgerMenu size={30} />
        )}
      </div>
      <div
        className={
          !isMobileViewDropdownOpen
            ? 'hidden'
            : 'fixed md:hidden gap-6 p-6 text-4xl flex flex-col w-screen h-screen bg-white text-brightRed top-0 overflow-y-hidden justify-center items-center'
        }
      >
        <Link
          className='hover:text-darkGrayishBlue'
          to='/'
          onClick={handleMobileView}
        >
          Pricing
        </Link>
        <Link
          className='hover:text-darkGrayishBlue'
          to='/'
          onClick={handleMobileView}
        >
          Product
        </Link>
        <Link
          className='hover:text-darkGrayishBlue'
          to='/'
          onClick={handleMobileView}
        >
          About Us
        </Link>
        <Link
          className='hover:text-darkGrayishBlue'
          to='/'
          onClick={handleMobileView}
        >
          Careers
        </Link>
        <Link
          className='hover:text-darkGrayishBlue'
          to='/'
          onClick={handleMobileView}
        >
          Community
        </Link>
      </div>
    </header>
  );
}
export default NavBar;
