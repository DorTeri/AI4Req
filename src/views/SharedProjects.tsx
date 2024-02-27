import React from 'react'
import { demoProjects } from '../constants'
import ProjectPreview from '../cmps/ProjectPreview'
import TitleDiv from '../UI/TitleDiv'

type Props = {}

const SharedProjects = (props: Props) => {
  return (
    <section className='flex flex-col grow'>
      <TitleDiv title={'Shared Projects'} />
      <div className='flex flex-wrap gap-4 p-5'>
        {
          demoProjects.map((project: any) => (
            <ProjectPreview key={project.title} project={project} isAllProjects={false} />
          ))
        }
      </div>
    </section>
  )
}

export default SharedProjects