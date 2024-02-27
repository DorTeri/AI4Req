import React, { useState } from 'react'
import ProjectPreview from '../cmps/ProjectPreview'
import CustomButton from '../UI/CustomButton'
import demoProjects from '../constants'

type Props = {}

type Project = {
  title: String,
  desc: String,
  createdAt: String,
  isApproved: Boolean
}

const AllProjects = (props: Props) => {

  const [permission, setPermission] = useState()


  return (
    <section className='flex flex-col grow'>
      <div className='h-[200px]'>
        <h2 className='text-center text-2xl font-semibold pt-8 pb-3'>All Projects</h2>
        <hr className='bg-sidebar text-sidebar h-1' />
      </div>
      <div className='flex flex-wrap gap-4 p-5'>
        {
          demoProjects.map((project: any) => (
              <ProjectPreview isAllProjects={true}
                project={project}
                key={project.title} />
          ))}
      </div>
    </section >
  )
}

export default AllProjects