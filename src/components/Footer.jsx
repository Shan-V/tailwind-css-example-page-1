import Logo from '../assets/img/logo-white.svg';
import Facebook from '../assets/img/icon-facebook.svg';
import Instagram from '../assets/img/icon-instagram.svg';
import Twitter from '../assets/img/icon-twitter.svg';
import Pinterest from '../assets/img/icon-pinterest.svg';
import YouTube from '../assets/img/icon-youtube.svg';
function Footer() {
  return (
    <footer id='footer' className='bg-veryDarkBlue'>
      <div className='grid  px-6 py-10 md:grid-cols-3 text-white md:gap-1 lg:gap-3'>
        <div className='flex flex-col-reverse justify-center items-center gap-6 md:flex-col'>
          <div className='md:hidden'>
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <img className='' src={Logo} alt='logo' />
          <div className='flex gap-3'>
            <img src={Facebook} alt='Facebook' />
            <img src={YouTube} alt='YouTube' />
            <img src={Twitter} alt='Twitter' />
            <img src={Pinterest} alt='Pinter' />
            <img src={Instagram} alt='Instagram' />
          </div>
        </div>
        <div className='flex justify-around mx-6 pt-5 md:pt-0'>
          <div className='flex flex-col gap-3'>
            <a href='/'>Home</a>
            <a href='/'>Pricing</a>
            <a href='/'>Products</a>
            <a href='/'>About</a>
          </div>
          <div className='flex flex-col gap-3'>
            <a href='/'>Careers</a>
            <a href='/'>Community</a>
            <a href='/'>Privacy Policy</a>
          </div>
        </div>
        <div className='flex flex-col justify-between mx-auto pt-5 md:pt-0'>
          <form className='flex gap-2'>
            <input
              type='text'
              className='px-3 rounded-full bg-white text-veryLightGray focus:outline-none'
              placeholder='Updated in your inbox'
            />
            <button className='bg-brightRed rounded-full px-6 py-2 text-white hover:bg-brightRedLight focus:outline-none'>
              Go
            </button>
          </form>
          <div className='hidden text-white md:block'>
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
