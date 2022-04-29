import Ali from '../assets/img/avatar-ali.png';
import Anisha from '../assets/img/avatar-anisha.png';
import Richard from '../assets/img/avatar-richard.png';

function Testimonial() {
  return (
    <section id='testimonial' className='p-6 mx-auto'>
      <div className='mt-12 text-center'>
        <h1 className=' font-bold text-3xl max-w-md mx-auto'>
          What's Different About manage?
        </h1>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Testimonial 1 */}
          <div className='max-w-md mx-auto mt-12 bg-veryLightGray rounded-lg px-6 py-8'>
            <img src={Ali} className='w-16 -mt-14 mx-auto' alt='ali' />
            <h5 className='text-lg font-bold'>Ali Bravo</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className='max-w-md mx-auto mt-12 bg-veryLightGray rounded-lg px-6 py-8'>
            <img src={Anisha} className='w-16 -mt-14 mx-auto' alt='ali' />
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className='max-w-md mx-auto mt-12 bg-veryLightGray rounded-lg px-6 py-8'>
            <img src={Richard} className='w-16 -mt-14 mx-auto' alt='ali' />
            <h5 className='text-lg font-bold'>Richard Watts</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <div className='my-12'>
          <a
            href='/'
            className='bg-brightRed 
          rounded-full p-3 px-6 text-white pt-2 hover:bg-brightRedLight'
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
