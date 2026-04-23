import Nav from './components/Nav'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import UVP from './components/UVP'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <PainPoints />
      <Services />
      <UVP />
      <Contact />
      <Footer />
    </div>
  )
}
