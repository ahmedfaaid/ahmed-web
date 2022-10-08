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
    <nav className='w-full py-6'>
      <div className='container flex items-center justify-between px-4 sm:px-0'>
        <div>
          <h1 className='text-4xl font-bold'>
            <Link href='/'>
              <a>
                ahmed<span className='text-primary'>.F</span>
              </a>
            </Link>
          </h1>
        </div>
        <div className='relative flex md:items-center'>
          <ul
            className={`text-2xl font-light md:flex ${
              menuOpen ? 'block' : 'hidden'
            } absolute top-20 right-0 z-20 w-max rounded bg-primary p-4 text-white md:static md:bg-transparent md:text-black dark:md:text-white`}
          >
            <li className='mb-5 md:mb-0 md:mr-5'>
              <Link href='/blog'>
                <a
                  className={`pb-2 ${
                    currentRoute.includes('/blog')
                      ? 'border-b md:border-primary md:text-primary'
                      : ''
                  } transition-colors duration-300 ease-in-out hover:border-b md:hover:border-primary md:hover:text-primary`}
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
                  } transition-colors duration-300 ease-in-out hover:border-b md:hover:border-primary md:hover:text-primary`}
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
                  } transition-colors duration-300 ease-in-out hover:border-b md:hover:border-primary md:hover:text-primary`}
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
                  } transition-colors duration-300 ease-in-out hover:border-b md:hover:border-primary md:hover:text-primary`}
                >
                  Let&apos;s Talk!
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
          <div className='z-20 ml-4 block md:hidden'>
            {/* Hamburger icon */}
            <button
              className='rounded border border-primary p-2 text-primary outline-none focus:outline-none dark:border-white dark:text-white'
              onClick={openMenu}
            >
              {menuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
