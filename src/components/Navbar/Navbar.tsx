import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'


function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className='navbar'>
      <h1 className='navbar__logo'><Link to="/">Aniquo</Link></h1>
      <Search open={open} setOpen={setOpen} />

      <div className='navbar__search'>

        <svg onClick={() => { setOpen((prev) => !prev) }} className='search' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.9999 21L16.6499 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <a className='navbar__link' target="_blank" rel="noreferrer" href="https://github.com/Simuratli">
          <img src="https://img.utdstc.com/icon/acd/159/acd159536597c94cfd7c8eae96fbd110e4aa02a8f6b9ed3edb775bbd0acbaee8:200" alt="One piece" />
        </a>
      </div>

    </nav>
  )
}

export default React.memo(Navbar)