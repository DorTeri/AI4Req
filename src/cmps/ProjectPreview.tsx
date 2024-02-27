import React from 'react'
import CustomButton from '../UI/CustomButton';

type Props = {
  isAllProjects: boolean;
  project: any
}

const ProjectPreview = ({isAllProjects , project}: Props) => {

  const handleRequest = () => {
    console.log('request view access')
  }


  return (
    <div className='flex flex-col m-auto gap-2 text-center border-sidebar border-2 p-1 w-[200px]'>
      <div className='bg-projectBg p-1'>
        {project.title}
      </div>
      <div className='bg-projectBg p-1'>
        {project.desc}
      </div>
      <div className='bg-projectBg p-1'>
        {project.createdAt}
      </div>
      {
        isAllProjects &&  project.isApproved ? (
          <CustomButton title={'Permission Requested'} type='button' style={'bg-requested w-4/5'} />
        ) : (
          <CustomButton title={'Request View Access'} type='button' style={'bg-request w-4/5'} func={handleRequest} />
        )
      }

    </div>
  )
}

export default ProjectPreview