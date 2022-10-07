import Layout from 'components/layout';
import MDXImage from 'components/MDXImage';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

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
    <p className='mb-4 font-body text-lg font-thin leading-relaxed text-black last:mb-0'>
      {children}
    </p>
  ),
  'p.inlineCode': ({ children }: { children: any }) => (
    <code className='px-1 font-body'>{children}</code>
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

export default function SinglePost({ post }: { post: any }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout title={post.title}>
      <h1
        className='my-4 mx-auto w-1/2 text-center
         font-heading text-4xl text-black sm:w-2/3 sm:text-3xl'
      >
        {post.title}
      </h1>
      <div className='mx-auto mt-8 px-4 sm:w-2/3'>
        <div className='relative mx-auto h-[32rem] w-full overflow-hidden rounded'>
          <Image
            src={post.image?.path}
            alt={post.title}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <p className='my-4 text-center font-body text-black'>
          Photo by{' '}
          <a
            href={post.image?.externalLink}
            target='_blank'
            rel='noreferrer noopener'
            className='text-primary'
          >
            {post.image?.creator}
          </a>{' '}
          on Unsplash
        </p>
        <p className='py-6 text-center font-body text-lg font-light italic text-black'>
          {post.description}
        </p>
        <div className='mx-auto mb-4 w-full'>
          <MDXContent components={mdxComponents} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return {
    props: { post }
  };
}
