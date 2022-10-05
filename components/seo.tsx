import {
  defaultDescription,
  defaultTitle,
  siteUrl,
  twitterUsername
} from 'constants/seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import defaultImage from 'public/images/ahmed-w2000.jpg';

interface SEOProps {
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  article: boolean | undefined;
}

export default function SEO({ title, description, image, article }: SEOProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Head>
      {title ? (
        <title>{title} - Ahmed Faaid</title>
      ) : (
        <title>Ahmed Faaid</title>
      )}
      <meta name='description' content={description || defaultDescription} />
      <meta name='image' content={`${siteUrl}/${image || defaultImage}`} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={twitterUsername} />
      <meta name='twitter:title' content={title || defaultTitle} />
      <meta
        name='twitter:description'
        content={description || defaultDescription}
      />
      <meta
        name='twitter:image'
        content={`${siteUrl}/${image || defaultImage}`}
      />
      <meta property='og:url' content={`${siteUrl}${currentPath}`} />
      {article && <meta property='og:type' content='article' />}
      <meta property='og:title' content={title || defaultTitle} />
      <meta
        property='og:description'
        content={description || defaultDescription}
      />
      <meta
        property='og:image'
        content={`${siteUrl}/${image || defaultImage}`}
      />
    </Head>
  );
}
