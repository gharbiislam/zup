import React from 'react'
import MainLayout from '../components/MainLayout'
import HeroSection from '../sections/HeroSection'
import Services from '../sections/Services'
import Features from '../sections/Features'
import About from '../sections/About'
import Testimonials from '../sections/Testimonials'
import Workflow from '../sections/Workflow'
import Pricing from '../sections/Pricing'
import Blog from '../sections/Blog'
import Projects from '../sections/Projects'
import Faq from '../sections/Faq'

const Home = () => {
  return (
   <MainLayout >
    <div className='pb-[200px]'>
    <HeroSection></HeroSection>
    <Projects></Projects>
    <Services></Services>
    <Workflow></Workflow>
    <Features></Features>
    <About></About>
    <Testimonials></Testimonials>
    <Pricing></Pricing>
    <Faq></Faq>
    <Blog></Blog></div>
   </MainLayout>
  )
}

export default Home