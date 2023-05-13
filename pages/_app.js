import '@/styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from '@/store'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      </Provider>
    </>
  )
}
