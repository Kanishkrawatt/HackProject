import '../styles/globals.css'
import Nevbar from '../Components/Nevbar/nevbar'
function MyApp({ Component, pageProps }) {
  return(<> 
    <Nevbar/>
  <Component {...pageProps} /></>)
}

export default MyApp
