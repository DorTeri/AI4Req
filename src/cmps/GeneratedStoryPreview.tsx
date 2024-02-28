import React, { useState } from 'react'
import CustomButton from '../UI/CustomButton';

type Props = {
    story: any;
    storyNumber: number;
    handleSaveStory?: (story: any) => void;
    isEvaluating: boolean
}

const GeneratedStoryPreview = ({ story, storyNumber, handleSaveStory, isEvaluating }: Props) => {

    const [isSaved, setIsSaved] = useState(false)

    const handleSave = () => {
        // Implement save
        setIsSaved(true)
        if (handleSaveStory) {
            handleSaveStory(story)
        }
        console.log('save')
    }

    const handleDelete = () => {
        // Implement delete
        console.log('delete')
    }

    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Story {storyNumber}:</h2>
            <div className='bg-input text-inputText rounded-lg p-2'>
                {story}
            </div>
            <div className='flex w-[200px] self-start'>
                {
                    !isEvaluating && !isSaved && (
                        <CustomButton title={'Save'} type='button' style={'bg-storyBlue pl-5 pr-5 rounded-3xl ml-0'} func={handleSave} />
                    )
                }
                {
                    !isEvaluating && isSaved &&
                    <CustomButton title={'Saved'} type='button' style={'bg-storyBlue pl-5 pr-5 rounded-3xl ml-0'} />
                }
                {
                    isEvaluating && (
                        <CustomButton title={'Evaluate'} type='button' style={'bg-storyBlue pl-5 pr-5 rounded-3xl ml-0 mr-3'} />
                    )
                }
                <CustomButton title={'Delete'} type='button' style={'bg-storyRed pl-5 pr-5 rounded-3xl ml-0'} func={handleDelete} />
            </div>
        </div>
    )
}

export default GeneratedStoryPreview