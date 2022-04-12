import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='navbar__logo'>Aniquo</h1>
      <a className='navbar__link' href="https://github.com/Simuratli">
        <img src="https://img.utdstc.com/icon/acd/159/acd159536597c94cfd7c8eae96fbd110e4aa02a8f6b9ed3edb775bbd0acbaee8:200" alt="One piece" />
      </a>
    </nav>
  )
}

export default React.memo(Navbar)