import React from 'react'
import Navbar from '../components/Navbar'

function All({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
  )
}

export default All