import { ReactNode } from 'react';
import Header from './Header';
import SEO from './seo';

interface LayoutProps {
  children: ReactNode;
  title?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  article?: boolean | undefined;
}

export default function Layout({
  children,
  title,
  description,
  image,
  article
}: LayoutProps) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        image={image}
        article={article}
      />
      <div className='bg-background'>
        <Header />
      </div>
    </>
  );
}