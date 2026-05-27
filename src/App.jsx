import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Writing from './components/Writing'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Education from './components/Education'
import Awards from './components/Awards'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Writing />
        <Projects />
        <Education />
        <Awards />
        <About />
      </main>
      <Footer />
    </div>
  )
}
