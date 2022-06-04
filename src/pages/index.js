import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Urza Labs</title>
        <meta name="description" content="Urza Labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl font-mono">
          You are a little too early
        </h1>
        <p className="mt-4">
          it will be worth the wait
        </p>
      </main>
    </div>
  )
}
