import AboutPage from '@/components/AboutPage'
import CausesPage from '@/components/CausesPage'
import DonationPage from '@/components/DonationPage'
import HomePage from '@/components/HomePage'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Web Development Application -Brief submission</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <CausesPage />
      <DonationPage />
    </div>
      
    </>
  )
}
