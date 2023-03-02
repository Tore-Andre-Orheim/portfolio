import Head from 'next/head';
import Home from './Home';

export default function App() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="myWebResume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
