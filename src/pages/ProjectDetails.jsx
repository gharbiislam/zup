import React from 'react'
import MainLayout from '../components/MainLayout'
import { useParams } from 'react-router-dom'
import { project } from '../data/projectData';
import { LuArrowUpRight } from "react-icons/lu";

const ProjectDetails = () => {
    const { slug } = useParams()
    const projects = project.find((b) => b.slug === slug);
    if(!projects){
        return <h2 className='text-center py-20'>project not found</h2>
    }
  return (
    <MainLayout >
        <div className='pb-[120px] lg:pb-[200px]'>
        <div className=' px-10 md:flex gap-20 justify-between items-center'>
            <div className='py-6'>
                <h2 className='text-h2-md lg:text-h2 text-black'>{ projects.title}</h2>
                <p className='text-body text-black_60 max-w-[450px]'>{ projects.text}</p>
            </div>
            <div className=' flex flex-col justify-between space-y-10 md:space-y-20 mt-2'>
                <a href={projects.link} className='flex items-center space-x-2 text-black_60 hover:text-black'>
                    <h5 className=' text-black_60 hover:text-black  text-right '>Live Demo</h5>
                    <LuArrowUpRight className='text-2xl' />

                </a>
                <div  className='space-x-2'>{projects.category.map((cat,i)=>
                <span className='badge'>
                        {cat}
                </span>
                )}</div>

            </div>
        </div>
        <div>
        <div  className='lg:space-x-2 px-5 lg:px-10 pt-[40px] lg:pt-[100px] space-y-2'>{projects.img.map((item,p)=>
                <img src={item} alt="" className='w-full rounded-2xl' />

                )}</div>
        </div>

</div>
    </MainLayout>
  )
}

export default ProjectDetails