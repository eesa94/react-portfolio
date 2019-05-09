import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavLink from './NavLink';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            links: [
                'Home',
                'About',
                'Portfolio',
                'Contact'
            ],
        }
    }

    render() {

        return (

            <nav className="d-flex flex-row justify-content-between align-items-center">
                <div className="brandContainer">
                    <Link to='/' className="brandLink">
                        <h1 className="brandName montserrat-6">Eesa Patel.</h1>
                    </Link>
                </div>

                <ul className="menuList h-100 d-flex flex-row justify-content-center align-items-center">
                    {this.state.links.map((link, index) =>  
                        <NavLink key={index} index={index} link={link} />
                    )}
                </ul>
            </nav>
        
        )
    }
}

export default Navbar
