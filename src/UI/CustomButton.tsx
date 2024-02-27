import React from 'react'

type Props = {
    title: String;
    type: 'submit' | 'reset' | 'button';
    textColor?: String;
    bgColor?: 'black' | 'white' | 'requested';
    style?: String;
    func?: (isLogin : boolean) => void;
}

const CustomButton = ({ title, type, textColor, bgColor, style, func }: Props) => {
    
    const handleClick = () => {
        if(func) {
            const action = title === 'Sign In'
            func(action)
        }
    }
    
    return (
        <button type={type}
            className={`text-${textColor ? textColor : 'white'} text-lg bg-${bgColor ? bgColor : 'sidebar'} rounded-lg m-auto p-4 pt-2 pb-2  ${style}`}
            onClick={handleClick}>
            {title}
        </button>

    )
}

export default CustomButton