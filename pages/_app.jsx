import '../styles/globals.css'
import { ZCOOL_XiaoWei } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const xiaowei = ZCOOL_XiaoWei({ weight: ['400'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={xiaowei.className}>
    <Component {...pageProps} />
  </main>
  )
}

export default MyApp
