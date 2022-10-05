import { ReactNode } from 'react';
import Header from './header';
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
      <div className='bg-background dark:bg-background-dark'>
        <Header />
        <div className='container pb-8'>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
