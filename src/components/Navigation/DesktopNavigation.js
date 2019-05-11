import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import NavLink from './NavLink'


export class DesktopNavigation extends Component {
    render() {

        const links = this.props.links;

        return (
            <div className="desktopNavigation d-flex flex-row justify-content-between align-items-center h-100">
                <div className="brandContainer">
                    <Link to='/' className="brandLink">
                        <h1 className="brandName montserrat-6">Eesa Patel.</h1>
                    </Link>
                </div>

                <ul className="menuList h-100 d-flex flex-row justify-content-center align-items-center">
                    {links.map((link, index) =>  
                        <NavLink key={index} index={index} link={link} />
                    )}
                </ul>
            </div>
        )
    }
}

export default DesktopNavigation
