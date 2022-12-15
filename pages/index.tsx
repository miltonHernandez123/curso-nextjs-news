import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import PageLayout from '../components/pegasLayout.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>Aprendiendo con Next.js desde cero</h1>
        <Link href='/about'> Ir a about</Link>
      </div>
      </PageLayout>
  )
}
