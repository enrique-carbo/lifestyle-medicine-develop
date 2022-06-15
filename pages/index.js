import Layout from "../components/layout";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

//Icons
import { Icon } from '@iconify/react'
import spaIcon from '@iconify/icons-mdi/spa'



export default function Home() {
  return (

    <Layout title="LM | Home">
    
    <div className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-emerald-700">
      <div className="relative z-10">
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lifestyle Medicine
        </h1>
        <Icon icon={spaIcon} style={{ fontSize: '86px' }} className="text-green-500"/>

        

        <p className="font-serif text-3xl m-5 text-center">
          Evidence based preventive and therapeutic approaches related to lifestyle.
        </p>

        <div className={styles.grid}>
          <Link href="/learn">
          <a className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Lifestyle Medicine.</p>
          </a>
          </Link>
          
          <Link href="/clinimetric">
          <a className={styles.card}>
            <h2>Clinimetrics &rarr;</h2>
            <p>Objective measurement tools.</p>
          </a>
          </Link>
          
          <Link href="/recommendation">
          <a className={styles.card}>
            <h2>Recommendations &rarr;</h2>
            <p>
              Healthy tips for a better life.
            </p>
          </a>
          </Link>
          
          <Link href="/news">
          <a className={styles.card}>
            <h2>News &rarr;</h2>
            <p>Find news and articles about healthy behaviors.</p>
          </a>
          </Link>
          
        </div>
      </main>
      </div>

      <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <video autoPlay loop muted className="absolute inset-0 object-cover object-top w-full h-full">
            <source src="/video/doctors.mp4" type='video/mp4' />
          </video>
        </div>
    </div>

     

    </Layout>
  )
}
