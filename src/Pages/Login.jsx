import React, { use } from 'react'
import loginanimation from '../../public/login.json'
import Lottie from 'lottie-react'
import { AuthContext } from '../context/Authcontext'

const Login = () => {
  const { loginUser } = use(AuthContext)
  const handdelLogin = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = {}

    for (let [key, value] of formData.entries()) {
      data[key] = value
    }

    console.log(data) //
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user
        console.log('User logged in successfully:', user)
      })
      .catch((error) => {
        console.error('Error logging in user:', error)
      })
  }
  return (
    <div className='min-h-screen  flex flex-col'>
      {/* Header */}
      <header className='mt-10 text-center'>
        <h1 className='text-4xl font-bold text-blue-700'>
          Welcome to the Register Page
        </h1>
        <p className='mt-4 text-gray-600'>
          This is a simple React application using Vite and Tailwind CSS.
        </p>
      </header>

      {/* Main Section */}
      <main className='flex flex-col md:flex-row items-center justify-center flex-1 px-4 mt-10 gap-10'>
        {/* Form */}
        <form
          onSubmit={handdelLogin}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              required
              type='email'
              placeholder='Enter your email'
              className='w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              id='password'
              name='password'
              required
              type='password'
              placeholder='Enter your password'
              className='w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full'
            >
              Login
            </button>
          </div>
        </form>

        {/* Lottie Animation */}
        <div className='mt-10 md:mt-0'>
          <Lottie
            animationData={loginanimation}
            loop
            style={{ width: '300px', height: '300px' }}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className='text-center mt-10 mb-6'>
        <p className='text-gray-600'>
          New an account?{' '}
          <a
            href='/resjister'
            className='text-blue-600 hover:underline font-semibold'
          >
            Sine UP
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Login
