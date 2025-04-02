import Hero from 'components/hero';
import LatestPosts from 'components/latestPosts';
import Layout from 'components/layout';
import { BlogPost } from 'types';
import { getPosts } from 'utils/getPosts';

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <Layout>
      <section className='mt-10 sm:mt-24'>
        <Hero />
      </section>
      <section className='mt-10 sm:mt-16 md:mt-24'>
        <LatestPosts posts={posts} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts }
  };
}
