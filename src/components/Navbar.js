import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <ul className='navbar-menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/project'>Project</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar