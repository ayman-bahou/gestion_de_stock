import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Stock App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Produits</Link>
            <Link to="/nouveauproduit" className="nav-link">Nouveau Produit</Link>
        </div>
    </nav>
  )
}

export default NavBar