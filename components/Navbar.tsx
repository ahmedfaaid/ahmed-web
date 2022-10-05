import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ThemeToggler from './themeToggler';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const currentRoute = useRouter().pathname;
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

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
            } w-max absolute z-20 md:static bg-primary md:bg-transparent top-20 right-0 p-4 rounded text-white md:text-black dark:md:text-white`}
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
            <ThemeToggler
              currentTheme={currentTheme}
              setTheme={setTheme}
              mounted={mounted}
            />
          </div>
          <div className='block md:hidden z-20 ml-4'>
            {/* Hamburger icon */}
            <button
              className='p-2 border rounded text-primary border-primary dark:text-white dark:border-white outline-none focus:outline-none'
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
