import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Passion coders for passionate coders"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}