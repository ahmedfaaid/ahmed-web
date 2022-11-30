import { Dispatch, SetStateAction } from 'react';

interface SearchProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  query: string;
}

export default function Search({ setSearchQuery, query }: SearchProps) {
  return (
    <div className='flex w-full justify-center px-4 sm:px-0'>
      <div className='relative w-[32rem]'>
        <input
          type='search'
          className='w-full rounded-full py-4 pr-4 pl-14'
          placeholder='Search posts'
          onChange={e => setSearchQuery(e.target.value)}
          value={query}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-black opacity-25 dark:text-white dark:opacity-100'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
    </div>
  );
}
