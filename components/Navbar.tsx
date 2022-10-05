import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const currentRoute = useRouter().pathname;

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='py-6 w-full'>
      <div className='container px-4 sm:px-0 flex justify-between items-center'>
        <div>
          <h1 className='text-4xl font-bold'>
            <Link href='/'>
              <a>
                ahmed<span className='text-primary'>.F</span>
              </a>
            </Link>
          </h1>
        </div>
        <div className='flex md:items-center relative'>
          <ul
            className={`md:flex text-2xl font-light ${
              menuOpen ? 'block' : 'hidden'
            } w-max absolute md:static bg-primary md:bg-transparent top-20 right-0 p-4 rounded text-white md:text-black`}
          >
            <li className='mb-5 md:mb-0 md:mr-5'>
              <Link href='/blog'>
                <a
                  className={`pb-2 ${
                    currentRoute.includes('/blog')
                      ? 'border-b md:border-primary md:text-primary'
                      : ''
                  } hover:border-b md:hover:border-primary md:hover:text-primary transition-colors duration-300 ease-in-out`}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className='mb-5 md:mb-0 md:mr-5'>
              <Link href='/projects'>
                <a
                  className={`pb-2 ${
                    currentRoute.includes('/projects')
                      ? 'border-b md:border-primary md:text-primary'
                      : ''
                  } hover:border-b md:hover:border-primary md:hover:text-primary transition-colors duration-300 ease-in-out`}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className='mb-5 md:mb-0 md:mr-5'>
              <Link href='/about'>
                <a
                  className={`pb-2 ${
                    currentRoute.includes('/about')
                      ? 'border-b md:border-primary md:text-primary'
                      : ''
                  } hover:border-b md:hover:border-primary md:hover:text-primary transition-colors duration-300 ease-in-out`}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/lets-talk'>
                <a
                  className={`pb-2 ${
                    currentRoute.includes('/lets-talk')
                      ? 'border-b md:border-primary md:text-primary'
                      : ''
                  } hover:border-b md:hover:border-primary md:hover:text-primary transition-colors duration-300 ease-in-out`}
                >
                  Let's Talk!
                </a>
              </Link>
            </li>
          </ul>
          <div className='ml-5'>
            {/* Night mode icon */}
            <button className='p-2 border rounded hover:bg-[#eaecfa] transition-colors duration-300 ease-in-out'>
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
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            </button>
          </div>
          <div className='block md:hidden z-20 ml-4'>
            {/* Hamburger icon */}
            <button
              className='flex items-center p-2 border rounded text-primary border-primary outline-none focus:outline-none'
              onClick={openMenu}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
