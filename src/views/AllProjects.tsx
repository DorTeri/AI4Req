import React, { useState } from 'react'
import ProjectPreview from '../cmps/ProjectPreview'
import CustomButton from '../UI/CustomButton'
import demoProjects from '../constants'
import TitleDiv from '../UI/TitleDiv'

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
      <TitleDiv title={'All Projects'}/>
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