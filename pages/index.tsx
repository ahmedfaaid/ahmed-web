import Hero from 'components/hero';
import Layout from 'components/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <section className='mt-10 sm:mt-24'>
        <Hero />
      </section>
    </Layout>
  );
};

export default Home;
