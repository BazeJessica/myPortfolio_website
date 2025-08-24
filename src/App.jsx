import React from 'react'
import './Component/Navbar/Navbar'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Project from './Component/Projects/Project'
import Work from './Component/MyWork/Work'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Project />
    <Work />
    <Contact />
    <Footer />
    </>
  )
}

export default App