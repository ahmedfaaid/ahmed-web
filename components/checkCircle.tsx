import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CheckCircleProps extends SVGProps<SVGSVGElement> {}

export default function CheckCircle({ className, ...rest }: CheckCircleProps) {
  const classes = twMerge(`h-6 w-6 ${className}`);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={classes}
      {...rest}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  );
}
