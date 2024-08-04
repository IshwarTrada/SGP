import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function home() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <h1 className='text-red-600'>Home</h1>
    </div>
  )
}

export default home
