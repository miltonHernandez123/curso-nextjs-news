import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import PageLayout from '../components/pegasLayout.jsx'
import { useEffect,useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }) {
  return (
    <PageLayout>
      <div className={styles.container}>
        {articles.length === 0 && <p>No Tenemos Articulos </p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <Image 
            alt={`Image for the articles ${article.title}`} 
            src={article.urlToImage}
            width={950}
            height={600}
            quality={50}
            priority={ index <2}
            layout='responsive'
            />

            <h2>{article.title}</h2>

            <p>
              {article.description}
            </p>
          </div>
        ))}
      </div>
      </PageLayout>
  )
}
//N request -> se ejecuta 1 vez en build ime o para refrescar la pagina 
export async function getStaticProps() {
  const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c700875fc15042c68a19d3c44deb9c1d")
  const {articles} = await response.json()
  return {
    props: {
      articles
    }
  }

}


//N requists -> se ejecuta N cantidad de veces 
//para datos que necestias ques sean MUY live 
// tienes demasiados datos dinamicos 
/*
export async function getServerSideProps(context) {
    const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c700875fc15042c68a19d3c44deb9c1d")
    const {articles} = await response.json()
    return {
      props: {
        articles
      }
    }

}
*/