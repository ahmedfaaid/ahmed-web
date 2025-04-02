import Post from '@/components/post';
import Search from '@/components/search';
import { BlogPost } from '@/types';
import { getPosts } from '@/utils/getPosts';
import readingTime from 'reading-time';

export default async function Blog({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { search } = await searchParams;
  const posts: BlogPost[] = await getPosts({ searchTerm: search as string });

  return (
    <>
      <section className='mt-10 sm:mt-16'>
        <Search />
        <div className='mt-8 grid gap-8 px-4 sm:mt-16 sm:grid-cols-2 sm:gap-2 sm:px-0 md:mt-16 md:grid-cols-3 lg:mt-24 lg:gap-4'>
          {posts.map(post => (
            <Post
              key={post.slug}
              title={post.data.title}
              slug={post.slug}
              publishedAt={post.data.publishedAt}
              image={post.data.image?.path}
              readingTime={readingTime(post.content).text}
            />
          ))}
        </div>
      </section>
    </>
  );
}
