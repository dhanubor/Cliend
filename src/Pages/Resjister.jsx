import Lottie from 'lottie-react'
import React, { use } from 'react'
import groovyWalkAnimation from '../../public/resjister.json'
import { AuthContext } from '../context/Authcontext'

const Resjister = () => {
  const { creatUser } = use(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = {}

    for (let [key, value] of formData.entries()) {
      data[key] = value
    }

    console.log(data) // যেমন { name: "John", email: "john@example.com", password: "123456" }

    //create user
    creatUser(data.email, data.password)
      .then((result) => {
        const user = result.user
        console.log('User created successfully:', user)
      })
      .catch((error) => {
        console.error('Error creating user:', error)
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
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-2'
              htmlFor='username'
            >
              Username
            </label>
            <input
              id='username'
              type='text'
              name='username'
              required
              placeholder='Enter your username'
              className='w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

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

          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-2'
              htmlFor='confirm-password'
            >
              Confirm Password
            </label>
            <input
              id='confirm-password'
              name='confirm-password'
              required
              type='password'
              placeholder='Re-enter your password'
              className='w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full'
            >
              Register
            </button>
          </div>
        </form>

        {/* Lottie Animation */}
        <div className='mt-10 md:mt-0'>
          <Lottie
            animationData={groovyWalkAnimation}
            loop
            style={{ width: '300px', height: '300px' }}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className='text-center mt-10 mb-6'>
        <p className='text-gray-600'>
          Already have an account?{' '}
          <a
            href='/login'
            className='text-blue-600 hover:underline font-semibold'
          >
            Login
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Resjister
