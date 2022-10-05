import Link from 'next/link';

export default function LatestPosts() {
  return (
    <div className='px-8 sm:px-0'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl'>Latest Posts</h2>
        <Link href='/blog'>
          <a className='flex items-center text-2xl hover:text-primary transition-colors duration-300 ease-in-out'>
            <span className='mr-2'>All Posts</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className='mt-4 md:mt-10 block sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4'>
        <Link href={`/blog`}>
          <a className='latest-posts-card block mb-4 sm:mb-0'>
            <div className='p-2 dark:bg-[#141e65] bg-offWhite rounded'>
              <h3 className='mb-4 text-xl font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
              <p className='text-lg italic text-black opacity-50 dark:text-offWhite dark:opacity-100'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus culpa nostrum.
              </p>
              <button className='flex items-center mt-4 hover:text-primary transition-colors duration-300 ease-in-out hovered-link'>
                <span className='mr-2'>Read More</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </button>
            </div>
          </a>
        </Link>
        <Link href={`/blog`}>
          <a className='latest-posts-card'>
            <div className='p-2 dark:bg-[#141e65] bg-offWhite rounded'>
              <h3 className='mb-4 text-xl font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
              <p className='text-lg italic text-black opacity-50 dark:text-offWhite dark:opacity-100'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus culpa nostrum.
              </p>
              <button className='flex items-center mt-4 hover:text-primary transition-colors duration-300 ease-in-out hovered-link'>
                <span className='mr-2'>Read More</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </button>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
