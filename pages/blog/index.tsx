import { allPosts } from '.contentlayer/generated';
import Layout from 'components/layout';
import Post from 'components/post';
import Search from 'components/search';
import { useEffect, useState } from 'react';
import { Post as PostType } from 'types';
import { pick } from 'utils/pick';

export default function Blog({ posts }: { posts: PostType[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [postsToDisplay, setPostsToDisplay] = useState<PostType[] | null>(null);

  useEffect(() => {
    if (!searchQuery) {
      setPostsToDisplay(posts);
    } else {
      const displayedPosts = posts.filter(post => {
        const title = post.title.toLowerCase();
        const desc = post.description.toLowerCase();
        const slug = post.slug.toLowerCase();
        const content = post.body?.raw.toLowerCase();

        return (
          title.includes(searchQuery.toLowerCase()) ||
          desc.includes(searchQuery.toLowerCase()) ||
          slug.includes(searchQuery.toLowerCase()) ||
          content?.includes(searchQuery.toLowerCase())
        );
      });
      setPostsToDisplay(displayedPosts);
    }
  }, [searchQuery, postsToDisplay, posts]);

  return (
    <Layout title='Blog'>
      <section className='mt-10 sm:mt-16'>
        <Search setSearchQuery={setSearchQuery} query={searchQuery} />
        <div className='mt-8 grid gap-8 px-4 sm:mt-16 sm:grid-cols-2 sm:gap-2 sm:px-0 md:mt-16 md:grid-cols-3 lg:mt-24 lg:gap-4'>
          {postsToDisplay?.map(post => (
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
    .map((post: PostType) =>
      pick(post, [
        'title',
        'description',
        'slug',
        'publishedAt',
        'image',
        'readingTime',
        'body'
      ])
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
