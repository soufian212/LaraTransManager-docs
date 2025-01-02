import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Preview from '../../static/img/preview.png';
import Logo from '../../static/img/logo.png';
import { Link } from 'react-router-dom';

function HomepageHeader() {
  return (
    <header className='grid sm:grid-cols-2 gap-4 items-center'>
      <div className="text-start ml-8">
        <img src={Logo} alt="logo" width={100} />
        <h2>LaraTransManager</h2>
        <p>LaraTransManager is a Laravel package designed to manage translations efficiently. It provides a user-friendly interface to handle translations for multiple languages within your Laravel application.</p>
        <Link to="/docs/intro" className='p-3 bg-indigo-500 rounded-lg text-white no-underline hover:no-underline hover:text-white hover:bg-indigo-600 dark:text-gray-200 dark:bg-indigo-600 dark:hover:bg-indigo-700'>Documentation</Link>
      </div>
      <div className='text-center'>
        <img src={Preview} alt="preview" width={500} className='rounded-lg shadow-lg' />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}
