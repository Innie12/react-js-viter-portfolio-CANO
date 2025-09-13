import React from 'react'
import Header from '../../partials/Header'
import Banner from './banner/Banner'
import About from './about/About'
import Footer from '../../partials/Footer'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Contact from '../../partials/Contact'

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
