import React from 'react'
import CustomButton from '../UI/CustomButton';

type Props = {
    desc: string;
    setDesc: React.Dispatch<React.SetStateAction<string>>;
    numberOfStories: string;
    setNumberOfStories: React.Dispatch<React.SetStateAction<string>>;
    selectedTechnologies: any;
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<any>>;
    handleSubmit: () => void;
}

const StorieForm = ({ desc, setDesc, numberOfStories, setNumberOfStories,
    selectedTechnologies, setSelectedTechnologies, handleSubmit }: Props) => {
    return (
        <>
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
            <CustomButton title={'Generate User Stories'} type='button' func={handleSubmit} style={'absolute bottom-5 right-5'} />
        </>

    )
}

export default StorieForm