import Image from 'next/image';
import Jump from 'public/images/hero/Saly-34.svg';
import SocialButton from './socialButton';

export default function Hero() {
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2'>
      <div className='flex flex-col px-8 sm:justify-end sm:px-0'>
        <p className='mb-4 text-3xl font-bold sm:mb-8 sm:text-5xl md:mb-10 md:text-7xl'>
          Hey!
        </p>
        <h2 className='mb-4 text-3xl font-semibold sm:mb-8 sm:text-4xl md:mb-10 md:text-5xl'>
          I&apos;m <span className='font-bold text-primary'>Ahmed Faaid</span>
        </h2>
        <p className='text-lg sm:text-2xl md:text-3xl'>
          I&apos;m a freelance full-stack developer
        </p>
        <div className='mt-4 flex items-center md:mt-10'>
          <SocialButton name='github' spacing='mr-8' />
          <SocialButton name='twitter' />
        </div>
      </div>
      <div className='order-first p-2 sm:order-none sm:justify-self-center sm:p-0'>
        <Image src={Jump} alt='Jumping' />
      </div>
    </div>
  );
}
