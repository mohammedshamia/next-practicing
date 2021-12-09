import '../styles/globals.css'
import MetaData from "../components/MetaData";

function MyApp({ Component, pageProps }) {
  return <>
    <MetaData/>
    <Component {...pageProps} />
  </>
}

export default MyApp
