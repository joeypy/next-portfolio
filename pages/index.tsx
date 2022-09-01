import { Layout } from '@/components/Layout';
import { Sidebar } from '@/components/Sidebar';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
    </Layout>
  );
};

export default Home;
