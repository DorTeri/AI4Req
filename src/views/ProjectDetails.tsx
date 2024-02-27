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
                <h2 className='mt-5 text-2xl underline text-center'>User Stories Generation</h2>
                {
                    !generatedStories[0] ? (
                        <StoryForm desc={desc} setDesc={setDesc}
                            numberOfStories={numberOfStories} setNumberOfStories={setNumberOfStories}
                            selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}
                            handleSubmit={handleSubmit} />
                    ) : (
                        <div className='flex flex-col gap-4'>
                            {
                                generatedStories.map((story: any, index: number) => (
                                    <GeneratedStoryPreview story={story} storyNumber={index + 1} key={index} />
                                ))
                            }
                            <CustomButton title={'Next'} type='button' style={'bg-grayNext absolute bottom-5 right-5'}/>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default ProjectDetails