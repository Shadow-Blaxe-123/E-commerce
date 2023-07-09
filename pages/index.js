import Head from 'next/head'
import { Content } from './components/Content'


export default function Home() {
  return (
    <> 
    {/* Meta Data */}
      <Head>
        <title>Shadow Store</title>
        <meta name='description' content='The best items to blend in the shadows'/>
      </Head>
      <div>
        <img src='/Home.jpg' alt='Img'/>
      </div>
      <Content/>
    </>
  )
}
