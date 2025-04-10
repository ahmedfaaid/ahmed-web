'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState
} from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams?.get('search');
  const [inputValue, setInputValue] = useState('');

  const searchTerm = useCallback(
    (searchText: string) => {
      router.replace(`/blog?search=${searchText}`);
    },
    [router]
  );

  useEffect(() => {
    if (search && search.trim() !== '') {
      setInputValue(search);
    }
  }, [search]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchTerm(inputValue);
  };

  return (
    <div className='flex w-full justify-center px-4 sm:px-0'>
      <form onSubmit={handleSubmit} className='w-full sm:w-[32rem] mx-auto'>
        <div className='relative'>
          <input
            type='search'
            className='w-full rounded-full py-4 pr-4 pl-14 bg-white dark:bg-stone-900'
            placeholder='Search posts'
            onChange={handleChange}
            value={inputValue}
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
      </form>
    </div>
  );
}
