import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
   
  // user post
  useEffect(() =>{
    fetch('http://localhost:3000/user')
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error fetching user data:', err))

  }, [])
  // user post axious
  useEffect(() =>{
    axios.get('http://localhost:3000/user')
      .then(response => console.log(response.data))
      .catch(error => console.error('Error fetching user data with axios:', error))
  })
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Welcome to the Home Page
      </h1>
      <p className="text-center mt-5">
        This is a simple React application using Vite and Tailwind CSS.
      </p>
    </div>
  )
}

export default Home