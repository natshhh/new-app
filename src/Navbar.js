import React from 'react'

const Navbar = () => {
  return(
    <div id='navbar'>
      <img alt='logo' className='logo' src="https://i.postimg.cc/MGpPTJRv/circle-cropped.png"/>
      <ul className='navbox'>
        <li><a href='#home' className='nav-link'>Home</a></li>
        <li><a href='#about' className='nav-link'>About</a></li>
        <li><a href='#contact' className='nav-link'>Contact</a></li>
      </ul>
    </div>

  )
}

export default Navbar
