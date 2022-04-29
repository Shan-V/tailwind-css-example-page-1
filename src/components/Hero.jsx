import illustrationIntro from '../assets/img/illustration-intro.svg';
function Hero() {
  return (
    <section id='hero' className='p-6 mx-auto'>
      <div className='grid md:grid-cols-2 mt-10'>
        {/* Left item */}
        <div className='mx-auto flex flex-col gap-6'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bring everyone together to build better products.
          </h1>
          <p className='text-darkGrayishBlue max-w-sm text-center md:text-left md:mx-0 mx-auto'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className='flex justify-center md:justify-start'>
            <a
              href='/'
              className=' bg-brightRed 
          rounded-full p-3 px-6 text-white pt-2 hover:bg-brightRedLight'
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Image */}
        <div className='order-first md:order-last'>
          <img
            className='mx-auto max-w-[100%]'
            src={illustrationIntro}
            alt='illustration intro'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
