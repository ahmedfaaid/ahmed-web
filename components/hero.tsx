import Image from 'next/image';
import Jump from 'public/images/Saly-34.svg';
import SocialButton from './socialButton';

export default function Hero() {
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2'>
      <div className='flex flex-col sm:justify-end px-8 sm:px-0'>
        <p className='mb-4 sm:mb-8 md:mb-10 text-3xl sm:text-5xl md:text-7xl font-bold'>
          Hey!
        </p>
        <h2 className='mb-4 sm:mb-8 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-semibold'>
          I'm <span className='text-primary font-bold'>Ahmed Faaid</span>
        </h2>
        <p className='text-lg sm:text-2xl md:text-3xl'>
          I'm a freelance full-stack developer
        </p>
        <div className='mt-4 md:mt-10 flex items-center'>
          <SocialButton name='github' spacing='mr-8' />
          <SocialButton name='twitter' />
        </div>
      </div>
      <div className='order-first sm:order-none sm:justify-self-center p-2 sm:p-0'>
        <Image src={Jump} alt='Jumping' />
      </div>
    </div>
  );
}
