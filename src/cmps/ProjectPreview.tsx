import React from 'react'

type Props = {}

const ProjectPreview = (props: Props) => {


  return (
    <div className='flex flex-col gap-2 text-center border-sidebar border-2 p-1'>
        <div className='bg-projectBg p-1'>
            Project Title
        </div>
        <div className='bg-projectBg p-1'>
            Short Description
        </div>
        <div className='bg-projectBg p-1'>
            Date of Creation
        </div>
    </div>
  )
}

export default ProjectPreview