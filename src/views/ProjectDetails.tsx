import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TitleDiv from '../UI/TitleDiv';
import { demoProjects } from '../constants';
import CustomButton from '../UI/CustomButton';
import StoryForm from '../cmps/StoryForm';
import GeneratedStoryPreview from '../cmps/GeneratedStoryPreview';
import { demoGeneratedStories } from '../constants';

type Props = {}

const ProjectDetails = (props: Props) => {

    const params = useParams()
    const { projectId } = params
    const [currentProject, setCurrentProject] = useState<any>(null)
    const [desc, setDesc] = useState('')
    const [numberOfStories, setNumberOfStories] = useState('1')
    const [selectedTechnologies, setSelectedTechnologies] = useState<{
        [key: string]: boolean;
    }>({
        ChatGPT: true,
        Bard: false,
    });
    const [isLoading, setIsLoading] = useState(false)
    const [generatedStories, setGeneratedStories] = useState<any>([])
    const [savedGeneratedStories, setSavedGeneratedStories] = useState<any>([])
    const [isEvaluating, setIsEvaluating] = useState(false)

    useEffect(() => {
        const project = demoProjects.find(project => project._id === projectId)
        setCurrentProject(project)
    }, [projectId, params])

    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setGeneratedStories(demoGeneratedStories)
            setIsLoading(false);
        }, 2000);
    }

    const handleSaveStory = (story: any) => {
        const updatedSavedGeneratedStories = [...savedGeneratedStories, story]
        setSavedGeneratedStories(updatedSavedGeneratedStories)
    }

    const handleNextClick = () => {
        setIsEvaluating(true)
    }

    if (!currentProject) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <section className='flex flex-col grow'>
            <TitleDiv title={currentProject.title} />
            <div className='p-4 relative h-full'>
                <h2 className='mt-5 text-2xl underline text-center'>{isEvaluating ? 'User Stories Evaluation' : 'User Stories Generation'}</h2>
                {
                    !isEvaluating && !generatedStories[0] && (
                        <StoryForm desc={desc} setDesc={setDesc}
                            numberOfStories={numberOfStories} setNumberOfStories={setNumberOfStories}
                            selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}
                            handleSubmit={handleSubmit} />
                    )
                }
                {
                    !isEvaluating && generatedStories[0] &&
                    (
                        <div className='flex flex-col gap-4'>
                            {
                                generatedStories.map((story: any, index: number) => (
                                    <GeneratedStoryPreview story={story} storyNumber={index + 1} key={index} handleSaveStory={handleSaveStory} isEvaluating={isEvaluating} />
                                ))
                            }
                            <CustomButton title={'Next'} bgColor={`bg-${savedGeneratedStories.length > 0 ? 'bg-sidebar' : 'bg-grayNext'}`} type='button' style={`bg-grayNext ${savedGeneratedStories.length > 0 && 'bg-sidebar'} absolute bottom-5 right-5`} func={handleNextClick} />
                        </div>
                    )
                }
                {
                    isEvaluating && (
                        savedGeneratedStories.map((story: any, index: number) => (
                            <GeneratedStoryPreview story={story} storyNumber={index + 1} key={index} isEvaluating={isEvaluating} />
                        ))
                    )
                }
            </div>
        </section>
    )
}

export default ProjectDetails