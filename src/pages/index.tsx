import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import styles from '@/styles/Common.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Next Auth example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {data?.user ? (
          <>
            <p>Hello {data.user.name}!</p>
            <button
              className={`${styles.button}`}
              onClick={() => router.push('/my')}
            >
              My Page
            </button>
          </>
        ) : (
          <button
            className={`${styles.button}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </main>
    </>
  );
}
