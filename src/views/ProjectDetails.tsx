import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TitleDiv from '../UI/TitleDiv';
import demoProjects from '../constants';
import CustomButton from '../UI/CustomButton';

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

    useEffect(() => {
        const project = demoProjects.find(project => project._id === projectId)
        setCurrentProject(project)
    }, [projectId, params])

    const handleSubmit = () => {

    }

    if (!currentProject) {
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
                <form className='flex flex-col gap-3 mt-6'>
                    <label className='text-xl'>
                        Insert your System Description:
                    </label>
                    <textarea
                        name="description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className='bg-input text-inputText p-2 rounded min-h-[200px]'
                    />
                    <div className='flex gap-3'>
                        <label className='text-xl'>
                            Insert your Desired Numbers of User Stories:
                        </label>
                        <input
                            type="number"
                            name="stories"
                            value={numberOfStories}
                            onChange={(e) => setNumberOfStories(e.target.value)}
                            placeholder="Project Title"
                            className='bg-input text-inputText p-2 rounded w-20'
                        />
                    </div>
                    <div className='flex items-center gap-3'>
                        <label className='text-xl'>
                            Choose your Desired AI Model:
                        </label>
                        {Object.keys(selectedTechnologies).map((techName) => (
                            <label key={techName} className="flex gap-1 items-center text-lg bg-input p-2 pr-4 pl-3 rounded">
                                <input
                                    type="radio"
                                    name={techName}
                                    checked={selectedTechnologies[techName]}
                                    onChange={(e) =>
                                        setSelectedTechnologies({
                                            ...selectedTechnologies,
                                            [techName]: e.target.checked,
                                        })
                                    }
                                />
                                {techName}
                            </label>
                        ))}
                    </div>
                </form>
                <CustomButton title={'Generate User Stories'} type='button' func={handleSubmit} style={'absolute bottom-5 right-5'}/>
            </div>
        </section>
    )
}

export default ProjectDetails