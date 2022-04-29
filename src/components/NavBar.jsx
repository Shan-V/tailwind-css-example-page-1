import Logo from '../assets/img/logo.svg';
function NavBar() {
  return (
    <div className='relative p-6 mx-auto'>
      {/* Flex container */}
      <div className='flex items-center justify-between'>
        <img src={Logo} alt='logo' />
        <div className='hidden md:flex space-x-6'>
          <a className='hover:text-darkGrayishBlue' href='/'>
            Pricing
          </a>
          <a className='hover:text-darkGrayishBlue' href='/'>
            Product
          </a>
          <a className='hover:text-darkGrayishBlue' href='/'>
            About Us
          </a>
          <a className='hover:text-darkGrayishBlue' href='/'>
            Careers
          </a>
          <a className='hover:text-darkGrayishBlue' href='/'>
            Community
          </a>
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
  );
}
export default NavBar;
