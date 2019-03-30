import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
        <Link to='/' className="brandLink">
            <h1 className="brandName montserrat-6">Eesa Patel.</h1>
        </Link>
    
    </nav>
  )
}

export default Navbar
