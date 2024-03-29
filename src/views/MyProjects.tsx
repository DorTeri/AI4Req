import React, { useState } from 'react'
import CustomButton from '../UI/CustomButton'
import NewProjectModal from '../cmps/NewProjectModal'
import ProjectPreview from '../cmps/ProjectPreview'
import { demoProjects } from '../constants'
import TitleDiv from '../UI/TitleDiv'

type Props = {}

const MyProjects = (props: Props) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  return (
    <section className='h-screen grow relative'>
      <TitleDiv title={'My Projects'} />
      <div className='flex flex-wrap gap-4 p-5'>
        {
          demoProjects.map((project: any) => (
            <ProjectPreview key={project.title} project={project} isAllProjects={false} />
          ))
        }
      </div>
      <div className='absolute right-3 bottom-3'>
        <CustomButton title={'New Project'} type='button' style={'self-end'} func={toggleModal} />
      </div>
      <div className={`absolute z-10 right-[135px] bottom-[50px] bg-white rounded-xl ${!isModalOpen ? 'opacity-0' : 'opacity-100'} transition-all`}>
        <NewProjectModal toggleModal={toggleModal} />
      </div>
    </section>
  )
}

export default MyProjects