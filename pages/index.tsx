import { Layout } from '@/components/Layout';
import { Navbar } from '@/components/navbar/Navbar';
import type { NextPage } from 'next';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* <div style={{ fontSize: 30, marginLeft: 100 }}>
        <LanguageSwitcher lang="es">es</LanguageSwitcher> | <LanguageSwitcher lang="en">en</LanguageSwitcher>
        <h1>{t('index.test')}</h1>
      </div> */}

      <header className="header" id="header">
        <Navbar />
      </header>

      <main>
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
