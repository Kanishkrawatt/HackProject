import Nevbar from '../Components/Nevbar/nevbar'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return(<> 
      <Nevbar />
  <Component {...pageProps} /></>)
}

export default MyApp
