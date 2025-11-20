import React from 'react'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
const Page404 = () => {
  return (
    <MainLayout >
        <div className='px-10 mb-[200px]'>
       
        <h1 className='text-h1-md lg:text-h1 text-black '>
            404
        </h1>
        <div className='space-y-10'>
        <h3 className='text-h3-md lg:text-h3 max-w-[600px] text-black_60 leading-10'>
            Looks like this page doesn’t exist - or it might have moved.<span className='text-black'> Let’s get you back on track.</span>
        </h3>
        <Button> <Link to={`/`} >Go to Home</Link></Button>
        </div>     
        </div>
    </MainLayout>
  )
}

export default  Page404