import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Embroidery from './Embroidery'
import Sequins from './Sequins'
import Cording from './Cording'
import DTF from './DTF'
import Screenprinting from './Screenprinting'
import Laserprofiling from './Laserprofiling'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/embroidery" element={<Embroidery />} />
        <Route path="/services/sequins" element={<Sequins />} />
        <Route path="/services/cording" element={<Cording />} />
        <Route path="/services/dtf" element={<DTF />} />
        <Route path="/services/screen-printing" element={<Screenprinting />} />
        <Route path="/services/laser-cutting" element={<Laserprofiling />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App