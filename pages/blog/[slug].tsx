import Layout from 'components/layout';
import MDXImage from 'components/MDXImage';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { BlogPost } from 'types';
import { getPosts } from 'utils/getPosts';

const mdxComponents = {
  MDXImage,
  h2: ({ children }: { children: any }) => (
    <h2 className='my-4 text-center font-heading text-2xl text-primary'>
      {children}
    </h2>
  ),
  h3: ({ children }: { children: any }) => (
    <h3 className='my-4 text-center font-heading text-2xl text-primary'>
      {children}
    </h3>
  ),
  p: ({ children }: { children: any }) => (
    <p className='mb-4 font-body text-lg font-thin leading-relaxed text-black last:mb-0 dark:text-white'>
      {children}
    </p>
  ),
  a: (props: any) => {
    const { children } = props;
    return (
      <a
        {...props}
        className='hover:text-secondary hover:border-secondary border-b border-primary text-primary'
      >
        {children}
      </a>
    );
  }
};

interface SinglePostProps {
  post: BlogPost;
  source: any;
}

export default function SinglePost({ post, source }: SinglePostProps) {
  return (
    <Layout title={post.data.title}>
      <h1
        className='my-4 mx-auto text-center font-heading
         text-4xl text-black dark:text-white sm:text-3xl md:w-3/4'
      >
        {post.data.title}
      </h1>
      <div className='mx-auto mt-8 px-4 md:w-3/4'>
        <div className='relative mx-auto h-60 w-full overflow-hidden rounded sm:h-80 md:h-[32rem]'>
          <Image
            src={post.data.image?.path}
            alt={post.data.title}
            fill
            className='object-cover'
          />
        </div>
        <p className='my-4 text-center font-body text-black dark:text-white'>
          Photo by{' '}
          <a
            href={post.data.image?.externalLink}
            target='_blank'
            rel='noreferrer noopener'
            className='text-primary'
          >
            {post.data.image?.creator}
          </a>{' '}
          on Unsplash
        </p>
        <p className='py-6 text-center font-body text-lg font-light italic text-black dark:text-offWhite'>
          {post.data.description}
        </p>
        <div className='mx-auto mb-4 w-full'>
          <MDXRemote {...source} components={mdxComponents} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: (await getPosts()).map(post => ({
      params: { slug: post.slug }
    })),
    fallback: false
  };
};

export const getStaticProps = async ({
  params
}: {
  params: { slug: string };
}) => {
  const post = (await getPosts()).find(post => post.slug === params.slug);
  const source = await serialize(post?.content as string, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ]
    }
  });
  return {
    props: { post, source }
  };
};
