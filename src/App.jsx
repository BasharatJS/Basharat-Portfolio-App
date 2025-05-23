import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero-section/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
