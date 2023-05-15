import React from 'react'
import TopAds from '../components/TopAds'
import Navbar from '../components/Navbar'
import Poster from '../components/Poster'
import BookRide from '../components/BookRide'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Features from '../components/Features'

const Home = () => {
  return (
    <>
      <TopAds />
      <Navbar />
      <Poster />
      <BookRide />
      <Services />
      <Features />
      <Footer />
    </>
  )
}

export default Home