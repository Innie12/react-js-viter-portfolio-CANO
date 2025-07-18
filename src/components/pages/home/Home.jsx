import React from 'react'
import Header from '../../partials/Header'
import Banner from './banner/Banner'
import About from './about/About'
import Footer from '../../partials/Footer'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default Home
