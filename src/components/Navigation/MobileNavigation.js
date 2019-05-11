import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import NavLink from './NavLink'


export class MobileNavigation extends Component {
    render() {

        const links = this.props.links;

        return (
            <div className="mobileNavigation d-flex flex-row justify-content-between align-items-center h-100">
                <div className="brandContainer">
                    <Link to='/' className="brandLink">
                        <h1 className="brandName montserrat-6">Eesa Patel.</h1>
                    </Link>
                </div>

                <button className="btn btn-primary">Menu</button>

            </div>
        )
    }
}

export default MobileNavigation
