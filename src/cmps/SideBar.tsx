import React from 'react'
import logoImage from '../assets/logo.png'
import SidebarItem from './SidebarItem'
import { useNavigate } from 'react-router-dom'

type Props = {}

const titles = [
    {
        name: 'My Projects',
        path: 'myprojects'
    },
    {
        name: 'Shared Projects',
        path: 'sharedprojects'
    },
    {
        name: 'All Projects',
        path: 'allprojects'
    },
]

const SideBar = (props: Props) => {

    const navigate = useNavigate();

    const handleNavigate = (path: any) => {
        navigate(path)
    }


    return (
        <section className='flex flex-col bg-sidebar min-w-[250px] min-h-screen'>
            <div className='bg-sidebar flex gap-3 p-5 hover:cursor-pointer' onClick={() => handleNavigate('/')}>
                <img src={logoImage} className='bg-transparent' />
                <h2 className='text-3xl font-semibold self-end text-blueLogo'>AI4Req</h2>
            </div>
            <h2 className='pl-3 text-lg text-white'>Hello <span className='text-blueLogo'>USER</span></h2>
            <div className='flex flex-col grow pt-10 gap-3'>
                {
                    titles.map(item => (
                        <div onClick={() => handleNavigate(item.path)}>
                            <SidebarItem title={item.name} key={item.path} />
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-between p-4 pb-2 text-white font-semibold text-xl'>
                <h2 className='hover:cursor-pointer'>Log Out</h2>
                <h2 className='hover:cursor-pointer'>Settings</h2>
            </div>
        </section>
    )
}

export default SideBar
