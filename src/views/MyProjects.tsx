import React, { useState } from 'react'
import CustomButton from '../UI/CustomButton'
import NewProjectModal from '../cmps/NewProjectModal'
import ProjectPreview from '../cmps/ProjectPreview'
import demoProjects from '../constants'

type Props = {}

const MyProjects = (props: Props) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  return (
    <section className='h-screen grow relative'>
      <div className='h-[200px]'>
        <h2 className='text-center text-2xl font-semibold pt-8 pb-3'>My Projects</h2>
        <hr className='bg-sidebar text-sidebar h-1' />
      </div>
      <div className='flex flex-wrap gap-4 p-5'>
        {
          demoProjects.map((project: any) => (
            <ProjectPreview key={project.title} project={project} isAllProjects={false}/>
          ))
        }
      </div>
      <div className='absolute right-3 bottom-3'>
        <CustomButton title={'New Project'} type='button' style={'self-end'} func={toggleModal} />
      </div>
      {
        isModalOpen && (
          <div className='absolute z-10 left-1/4'>
            <NewProjectModal toggleModal={toggleModal} />
          </div>
        )
      }
    </section>
  )
}

export default MyProjects