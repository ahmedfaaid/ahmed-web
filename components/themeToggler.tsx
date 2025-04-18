interface ThemeTogglerProps {
  currentTheme: string | undefined;
  setTheme: (theme: string) => void;
  mounted: boolean;
}

export default function ThemeToggler({
  currentTheme,
  setTheme,
  mounted
}: ThemeTogglerProps) {
  if (!mounted) return null;

  if (currentTheme === 'dark') {
    return (
      <button
        className='p-2 border rounded-sm hover:bg-[#121852] transition-colors duration-300 ease-in-out'
        onClick={() => setTheme('light')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button
        className='p-2 border rounded-sm hover:bg-[#eaecfa] transition-colors duration-300 ease-in-out'
        onClick={() => setTheme('dark')}
      >
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
    );
  }
}
