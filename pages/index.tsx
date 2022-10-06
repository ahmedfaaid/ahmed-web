import { allPosts } from '.contentlayer/generated';
import Hero from 'components/hero';
import LatestPosts from 'components/latestPosts';
import Layout from 'components/layout';
import { Post as PostType } from 'types';
import { pick } from 'utils/pick';

export default function Home({ posts }: { posts: PostType[] }) {
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
  const posts = allPosts
    .map((post: PostType) =>
      pick(post, ['title', 'description', 'slug', 'readingTime'])
    )
    .sort(
      (a: PostType, b: PostType) =>
        Number(new Date(b.publishedAt as string)) -
        Number(new Date(a.publishedAt as string))
    );
  return {
    props: { posts }
  };
}
