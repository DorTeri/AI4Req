import React, { FormEvent, useState } from 'react'
import CustomButton from '../UI/CustomButton'

type Props = {
    toggleModal: () => void;
}

const NewProjectModal = ({ toggleModal }: Props) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }


    return (
        <div className='flex flex-col border-sidebar rounded-xl border-2 min-w-[400px]'>
            <div>
                <h2 className='text-center text-2xl font-semibold pt-4 pb-3'>Add a New Project</h2>
                <hr className='bg-sidebar text-sidebar h-1' />
            </div>
            <div className='p-2'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-6'>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Project Title"
                        className='bg-input text-inputText p-2 rounded'
                    />
                    <textarea
                        name="description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Short Description"
                        className='bg-input text-inputText p-2 rounded min-h-[100px]'
                    />
                    <div className='flex justify-between gap-5 mt-10 mb-3'>
                        <CustomButton title={'Cancel'} type='button' style={'bg-gray grow'} func={toggleModal} />
                        <CustomButton title={'Save'} type='submit' style={'grow'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewProjectModal