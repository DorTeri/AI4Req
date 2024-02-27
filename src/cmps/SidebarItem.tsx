type SidebarItemProps = {
    title: String
}

const SidebarItem = ({ title }: SidebarItemProps) => {
    return (
        <div className='w-full text-center hover:cursor-pointer hover:bg-[#ffffff69] transition-all'>
            <hr className='text-white w-full'/>
            <h2 className='text-white text-lg font-semibold pt-4 pb-4'>{title}</h2>
            <hr className='text-white'/>
        </div>
    )
}

export default SidebarItem
