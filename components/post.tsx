import Image from 'next/image';
import Link from 'next/link';

interface PostProps {
  title: string;
  slug: string;
  publishedAt: Date;
  image: string;
  readingTime: string;
}

export default function Post({
  title,
  slug,
  publishedAt,
  image,
  readingTime
}: PostProps) {
  return (
    <div>
      <Link
        href={`/blog/${slug}`}
        className='blog-post-card transition-colors duration-300 ease-in-out'
      >
        <div className='hovered-image relative h-60 w-full overflow-hidden rounded-md md:h-72 lg:h-96'>
          <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <span className='text-black opacity-50 dark:text-offWhite dark:opacity-100 md:text-lg lg:text-xl'>
          {new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}{' '}
          - {readingTime}
        </span>
        <h3 className='mt-5 text-2xl'>{title}</h3>
      </Link>
    </div>
  );
}
