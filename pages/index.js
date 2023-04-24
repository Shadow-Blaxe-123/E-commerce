import Image from 'next/image'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function Home() {
  return (
    <> 
      <Head>
        <title>Shadow Store</title>
        <meta name='description' content='The best items to blend in the shadows'/>
      </Head>
      <Navbar/>
      <div>
        <img src='/Home.jpg' alt='Img'/>
      </div>
      <Footer/>
    </>
  )
}
