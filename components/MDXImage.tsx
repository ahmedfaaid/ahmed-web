import Image from 'next/image';

interface MDXImageProps {
  src: string;
  alt: string;
}

export default function MDXImage({ src, alt, ...props }: MDXImageProps) {
  return (
    <div className='relative mx-auto h-60 w-full sm:h-80 md:h-[32rem]'>
      <Image src={src} alt={alt} fill unoptimized {...props} />
    </div>
  );
}
