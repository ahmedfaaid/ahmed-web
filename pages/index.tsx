import Hero from 'components/hero';
import LatestPosts from 'components/latestPosts';
import Layout from 'components/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <section className='mt-10 sm:mt-24'>
        <Hero />
      </section>
      <section className='mt-10 sm:mt-16 md:mt-24'>
        <LatestPosts />
      </section>
    </Layout>
  );
};

export default Home;
