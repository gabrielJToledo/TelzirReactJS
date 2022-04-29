import React from 'react'
import './Header.css'
import { Link} from 'react-router-dom'

function Header() {
  const logo = require('../../assets/images/logo.png')

  return (
    <header className="header d-sm-flex flex-row">
      <div className="logo d-flex justify-content-center align-itens-center"><img src={logo} alt="Logo" /></div>
      <nav className="routes d-none d-sm-flex">
          <Link to="/">Home</Link>
          <Link to="/">Contato</Link>
          <Link to="/">Serviços</Link>
          <Link to="/">Plano FalaMais</Link>
      </nav>
    </header>
  )

}

export default Header