import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Work"
import Gallery from "./components/Gallery"
import Event from "./components/Event"
import Contact from "./components/Contact"
import Copyright from "./components/Copyright"

function App() {
 
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Work/>
      <Gallery/>
      <Event/>
      <Contact/>
      <Copyright/>
      
    </div>
    </BrowserRouter>
  )
}

export default App
