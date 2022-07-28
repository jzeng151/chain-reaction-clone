import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ChainReaction from '../components/ChainReaction';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chain Reaction</title>
        <meta name="description" content="Complete the chain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <ChainReaction />



    </div>
  )
}

export default Home
