import SocialButton from '@/components/socialButton';
import Sitting from '@/public/images/hero/Saly-13.svg';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className='mt-10 md:mt-24'>
        <div className='flex flex-col px-4 sm:px-0 md:grid md:grid-cols-2'>
          <div className='flex flex-col justify-end'>
            <p className='mb-4 text-xl sm:mb-8 sm:text-2xl md:mb-10'>
              <span className='text-primary'>Ahmed</span> is a full-stack
              developer based in Hamilton, Ontario. He has a passion for
              building web and software products.
            </p>
            <p className='mb-4 text-xl sm:mb-8 sm:text-2xl md:mb-10'>
              When he is not working, he enjoys spending time with his family,
              playing video games(mostly Destiny 2) and producing music.
            </p>
            <div>
              <h3 className='w-max border-b border-primary pb-2 text-xl font-bold md:text-2xl lg:text-4xl'>
                Find me online
              </h3>
            </div>
            <div className='mt-10 flex items-center'>
              <SocialButton name='github' spacing='mr-4 sm:mr-8' showLabel />
              <SocialButton name='twitter' showLabel />
            </div>
          </div>
          <div className='relative order-first h-96 md:order-none'>
            <Image src={Sitting} alt='Jumping' fill className='object-cover' />
          </div>
        </div>
      </section>
    </>
  );
}
