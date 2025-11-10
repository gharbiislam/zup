import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from 'aos';

const HeroSection = () => {
  useEffect(() => { 
      AOS.init({ duration: 1000, once: true });
    }, []);
  
  return (
    <div className='pt-[120px] px-10 flex flex-col gao-20'>

      <h1 className='text-h1 text-black relative left-40'>Studio</h1>
      <div className='flex justify-between'>
        <div className='flex gap-10'>
          <div data-aos="fade-up" date-aos-delay="0">
            <h3 className='text-h3'> 99+</h3>
            <p className='text-body text-black_60'>Completed Projects</p>
          </div>
          <div  data-aos="fade-up" date-aos-delay="200">
            <h3 className='text-h3'>5+</h3>
            <p className='text-body text-black_60'>Years of Experience</p>
          </div>
          <div  data-aos="fade-up" date-aos-delay="400">
            <h3 className='text-h3'>100%</h3>
            <p className='text-body text-black_60'> Happy Clients</p>
          </div>
        </div>
        <p className='text-body text-black_60 w-1/3'>We craft memorable <span className='text-black'>brands</span>, design and develop stunning  <span className='text-black'>websites</span>, optimize your presence through strategic  <span className='text-black'>SEO</span>, and amplify your impact with results-driven  <span className='text-black'>digital marketing.</span></p>
      </div>
    </div>
  )
}

export default HeroSection