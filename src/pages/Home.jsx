import React from 'react'
import MainLayout from '../components/MainLayout'
import HeroSection from '../sections/HeroSection'
import Services from '../sections/Services'
import Features from '../sections/Features'

const Home = () => {
  return (
   <MainLayout className=''>
    <HeroSection></HeroSection>
    <Services></Services>
    <Features></Features>
    
   </MainLayout>
  )
}

export default Home