import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useFormHook'
import CustomButton from '../UI/CustomButton';
import logoImage from '../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';


type Props = {}

const Signup = (props: Props) => {

  const navigate = useNavigate();
  const location = useLocation()
  const { pathname } = location
  const { values, handleChange, handleSubmit, handleSelectChange } = useForm();
  const [isLogin, setIsLogin] = useState(pathname === '/signup' ? false : true);


  const handleChangePath = () => {
    const newPath = isLogin ? '/signup' : '/login'
    setIsLogin(!isLogin)
    navigate(newPath)
  }

  return (
    <section className={`flex grow ${isLogin && 'flex-row-reverse'}`}>
      <div className='flex bg-sidebar h-screen w-1/3'>
        <div className='mr-auto ml-auto flex flex-col gap-5 text-center'>
          <div className='bg-sidebar flex gap-3 p-5'>
            <img src={logoImage} className='bg-transparent' />
            <h2 className='text-3xl font-semibold self-end text-blueLogo'>AI4Req</h2>
          </div>
          <div className='mt-10'>
            <h2 className='pb-20 text-3xl text-white'>{isLogin ? 'New Here?' : 'Already a user?'}</h2>
            <p className='text-xl text-white'>{isLogin ? 'Join our advance AI tool to ease your user story creation process!' : 'Awesome! Welcome back!'}</p>
            <CustomButton title={isLogin ? 'Sign Up' : 'Sign In'} textColor={'black'} bgColor={'white'} type='button' style={'mt-[80px]'} func={handleChangePath} />
          </div>

        </div>
      </div>
      <div className='m-auto w-2/3 p-10'>
        <h1 className='pb-2 text-center text-2xl font-semibold'>{isLogin ? 'Login to Your Account': 'Make a New Account'}</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className='bg-input text-inputText p-2 rounded'
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            className='bg-input text-inputText p-2 rounded'
          />
          {
            !isLogin && (
              <>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className='bg-input text-inputText p-2 rounded'
                />
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className='bg-input text-inputText p-2 rounded'
                />
                <select name="role" onChange={handleSelectChange} className='bg-input text-inputText p-2 rounded w-1/2'>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </>
            )
          }
          <CustomButton title={isLogin ? 'Sign In' : 'Sign Up'} type='submit' />
        </form>
      </div>
    </section>
  )
}

export default Signup