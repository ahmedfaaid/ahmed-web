import Hero from '@/components/hero';
import LatestPosts from '@/components/latestPosts';
import { BlogPost } from '@/types';
import { getPosts } from '@/utils/getPosts';

export default async function Home() {
  const posts: BlogPost[] = await getPosts();

  return (
    <>
      <section className='mt-10 sm:mt-24'>
        <Hero />
      </section>
      <section className='mt-10 sm:mt-16 md:mt-24'>
        <LatestPosts posts={posts} />
      </section>
    </>
  );
}
