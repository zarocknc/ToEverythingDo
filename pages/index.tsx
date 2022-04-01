import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeCompIndex from "../components/home/ui";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ToEverythingDo </title>
        <meta name="description" content="ToeverythingDO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
        <HomeCompIndex/>
      </main>


    </div>
  )
}

export default Home
