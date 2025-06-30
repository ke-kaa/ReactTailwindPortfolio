import React, { useEffect } from 'react'
import "@fontsource/poppins"
import "@fontsource/dancing-script"
import './App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/HomePage/Homepage'
import About from './pages/About/About'
import ServicePage from './pages/ServicePage/ServicePage'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'

export default function App() {
    useEffect(() => {
        AOS.init({duration:1000})
    }, []);
    return (
        <>
        <Header />
        <Homepage />
        <About />
        <ServicePage />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
        </>
        
    )
}
