import React from 'react'
import Navber from '../components/Navber'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Layouts = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layouts