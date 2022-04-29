function CTA() {
  return (
    <section id='cta' className='bg-brightRed'>
      <div className='grid md:grid-cols-2 px-6 py-24 mx-auto text-center gap-6'>
        <div className='flex justify-center items-center'>
          <h2 className='text-5xl font-bold leading-tight text-white md:text-left md:max-w-md'>
            Simplify how your team works today.
          </h2>
        </div>
        <div className='flex justify-center items-center'>
          <a
            href='/'
            className='bg-white 
          rounded-full p-3 px-6 text-brightRed pt-2 hover:bg-zinc-900'
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
