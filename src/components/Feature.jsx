function Feature() {
  return (
    <section id='feature' className='p-6 mx-auto'>
      <div className='grid md:grid-cols-2 mt-12 gap-6'>
        {/* left item */}
        <div className='text-center md:text-left mx-auto'>
          <h2 className='font-bold text-3xl max-w-md'>
            What's different about Manage?
          </h2>
          <p className='max-w-sm mt-3 pt-3 text-darkGrayishBlue mx-auto md:mx-0'>
            Manage provides all the functionality to your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.
          </p>
        </div>
        {/* right item */}
        <div className='flex flex-col gap-8 max-w-md mx-auto'>
          {/* Card item 1 */}
          <div className='flex flex-col gap-3 md:gap-6 md:flex-row'>
            {/* Heading */}
            <div className='bg-brightRedSupLight rounded-l-full md:bg-transparent'>
              <div className='flex items-center gap-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden text-base font-bold mb-4 md:block'>
                Everything you need in one place
              </h3>
              <p className='text-darkGrayishBlue'>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
          {/* Card item 2 */}
          <div className='flex flex-col gap-3 md:gap-6 md:flex-row'>
            {/* Heading */}
            <div className='bg-brightRedSupLight rounded-l-full md:bg-transparent'>
              <div className='flex items-center gap-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Advanced build-in reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden text-base font-bold mb-4 md:block'>
                Advanced build-in reports
              </h3>
              <p className='text-darkGrayishBlue'>
                Set internal delivery estimates and track progress toward
                company goals. Our customizable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          {/* Card item 3 */}
          <div className='flex flex-col gap-3 md:gap-6 md:flex-row'>
            {/* Heading */}
            <div className='bg-brightRedSupLight rounded-l-full md:bg-transparent'>
              <div className='flex items-center gap-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden text-base font-bold mb-4 md:block'>
                Track company-wide progress
              </h3>
              <p className='text-darkGrayishBlue'>
                See how your day-to-day tasks fit into the wider vision input Go
                from tracking progress at the milestone level all the way done
                to the smallest of details. Never lose sight of the bigger
                picture again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
