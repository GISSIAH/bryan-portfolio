import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Bryan Malunje's Portfolio`}</title>
        <meta name="description" content="Malawian software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
    </div>
  )
}
