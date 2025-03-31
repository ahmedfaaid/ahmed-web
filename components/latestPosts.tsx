import Link from 'next/link';
import { Post as PostType } from 'types';

export default function LatestPosts({ posts }: { posts: PostType[] }) {
  return (
    <div className='px-8 sm:px-0'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl'>Latest Posts</h2>
        <Link
          href='/blog'
          className='flex items-center text-2xl transition-colors duration-300 ease-in-out hover:text-primary'
        >
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
        </Link>
      </div>
      <div className='mt-4 block sm:grid sm:grid-cols-2 sm:gap-x-4 md:mt-10 md:grid-cols-3'>
        {posts.map(post => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className='latest-posts-card mb-4 block sm:mb-0'
          >
            <div className='rounded bg-offWhite p-2 dark:bg-[#141e65]'>
              <h3 className='mb-4 text-xl font-semibold'>{post.title}</h3>
              <p className='text-lg italic text-black opacity-50 dark:text-offWhite dark:opacity-100'>
                {post.description}
              </p>
              <button className='hovered-link mt-4 flex items-center transition-colors duration-300 ease-in-out hover:text-primary'>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
