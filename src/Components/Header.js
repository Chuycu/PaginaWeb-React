import React from 'react'
import Avatar from './LetterAvatars';
import BasicButtons from './BasicButton';

function Navbar() {
  return (
    <div >
      <nav className='NavBar'>
        <Avatar/>
        <p>Nuevo</p>
        <p>Noticias</p>
        <p>Nosotros</p>
        <p>Contactos</p>
        <BasicButtons/>
      </nav>
    </div>
  )
}

export default Navbar