import Layout from 'components/layout';
import Post from 'components/post';
import Search from 'components/search';
import { useEffect, useState } from 'react';
import readingTime from 'reading-time';
import { BlogPost } from 'types';
import { getPosts } from 'utils/getPosts';

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [postsToDisplay, setPostsToDisplay] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    if (!searchQuery) {
      setPostsToDisplay(posts);
    } else {
      const displayedPosts = posts.filter(post => {
        const title = post.data.title.toLowerCase();
        const desc = post.data.description.toLowerCase();
        const slug = post.slug.toLowerCase();
        const content = post.content.toLowerCase();

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
              title={post.data.title}
              slug={post.slug}
              publishedAt={post.data.publishedAt}
              image={post.data.image?.path}
              readingTime={readingTime(post.content).text}
            />
          ))}
        </div>
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
