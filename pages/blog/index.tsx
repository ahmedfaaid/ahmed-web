import { allPosts } from '.contentlayer/generated';
import Layout from 'components/layout';
import Post from 'components/post';
import Search from 'components/search';
import { BlogProps } from 'types';
import { pick } from 'utils/pick';

export default function Blog({ posts }: { posts: BlogProps[] }) {
  return (
    <Layout title='Blog'>
      <section className='mt-10 sm:mt-16'>
        <Search />
        <div className='mt-8 grid gap-8 px-4 sm:mt-16 sm:grid-cols-2 sm:gap-2 sm:px-0 md:mt-16 md:grid-cols-3 lg:mt-24 lg:gap-4'>
          {posts.map((post) => (
            <Post
              key={post.slug}
              title={post.title}
              slug={post.slug}
              publishedAt={post.publishedAt}
              image={post.image?.path}
              readingTime={post.readingTime?.text as string}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = allPosts
    .map((post: BlogProps) =>
      pick(post, [
        'title',
        'description',
        'slug',
        'publishedAt',
        'image',
        'readingTime'
      ])
    )
    .sort(
      (a: BlogProps, b: BlogProps) =>
        Number(new Date(b.publishedAt as string)) -
        Number(new Date(a.publishedAt as string))
    );
  return {
    props: { posts }
  };
}
