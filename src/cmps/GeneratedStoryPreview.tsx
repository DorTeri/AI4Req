import React from 'react'
import CustomButton from '../UI/CustomButton';

type Props = {
    story: any;
    storyNumber: number
}

const GeneratedStoryPreview = ({story , storyNumber}: Props) => {
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-xl'>Story {storyNumber}:</h2>
        <div className='bg-input text-inputText rounded-lg p-2'>
            {story}
        </div>
        <div className='flex w-[200px] self-start'>
            <CustomButton title={'Save'} type='button' style={'bg-storyBlue pl-5 pr-5 rounded-3xl ml-0'}/>
            <CustomButton title={'Delete'} type='button' style={'bg-storyRed pl-5 pr-5 rounded-3xl ml-0'}/>
        </div>
    </div>
  )
}

export default GeneratedStoryPreview