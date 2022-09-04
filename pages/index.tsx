import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';

import { Layout } from '@/components/Layout';
import { Navbar } from '@/components/navbar/Navbar';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <header className="header" id="header">
        <Navbar />
      </header>

      <main>
        <h1>{t('index.test')}</h1>
        {/* <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact /> */}
      </main>

      <footer className=""></footer>
    </Layout>
  );
};

export default Home;
