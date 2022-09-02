import { Layout } from '@/components/Layout';
import { Sidebar } from '@/components/Sidebar';
import type { NextPage } from 'next';
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Sidebar />
      <div style={{ fontSize: 30, marginLeft: 100 }}>
        <LanguageSwitcher lang="es">es</LanguageSwitcher> | <LanguageSwitcher lang="en">en</LanguageSwitcher>
        <h1>{t('index.test')}</h1>
      </div>
    </Layout>
  );
};

export default Home;

