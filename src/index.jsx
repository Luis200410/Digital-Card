import { createRoot } from 'react-dom/client'
import './index.css'
import Photo from './Image'
import Info from  './Info'
import About from './About'
import Interest  from './Interest'
import Footer from './Footer'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <Photo />
    <Info />
    <About />
    <Interest />
    <Footer />
  </>
)
