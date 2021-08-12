import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Notification from './../components/ui/notification'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Notification />
    </Layout>
  )
}

export default MyApp
