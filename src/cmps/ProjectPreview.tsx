import React from 'react'
import CustomButton from '../UI/CustomButton';
import { useNavigate } from 'react-router-dom';

type Props = {
  isAllProjects: boolean;
  project: any
}

const ProjectPreview = ({ isAllProjects, project }: Props) => {

  const navigate = useNavigate()

  const handleRequest = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('request view access')
  }

  const handleProjectClicked = () => {
    navigate(`/project/${project._id}`)
  }



  return (
    <div className='flex flex-col m-auto gap-2 text-center border-sidebar border-2 p-1 w-[200px] hover:cursor-pointer' 
    onClick={handleProjectClicked}>
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
        isAllProjects && project.isApproved ? (
          <CustomButton title={'Permission Requested'} type='button' style={'bg-requested w-4/5'} />
        ) : (
          <CustomButton title={'Request View Access'} type='button' style={'bg-request w-4/5'} func={(e: any) => handleRequest(e)} />
        )
      }

    </div>
  )
}

export default ProjectPreview