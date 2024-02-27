import React from 'react'

type Props = {
    title: String
}

const TitleDiv = ({ title }: Props) => {
    return (
        <div className=''>
            <h2 className='text-center text-2xl font-semibold pt-8 pb-3'>{title}</h2>
            <hr className='bg-sidebar text-sidebar h-1' />
        </div>
    )
}

export default TitleDiv