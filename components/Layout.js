import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, pageTitle, description}) {
  return (
    <>
      <Head>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        />
        <meta charset="utf-8"/>
        <meta name="Description" content={ description } />
        <title>
          { pageTitle }
        </title>
      </Head>
      <main>
        <Header />
        <div className="content">
          { children }
        </div>
      </main>
    </>
  );
};
