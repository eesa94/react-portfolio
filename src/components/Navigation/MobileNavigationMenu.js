import React, { Component } from 'react'
import './Navbar.css'
import NavLink from './NavLink'


export class MobileNavigationMenu extends Component {
    render() {

        const links = this.props.links;
        const menuOpen = {
            left: '0'
        };
        const menuClose = {
            left: '-100%'
        };

        return (
            <ul className="menuList menuListMobile d-flex flex-column justify-content-start align-items-center h-100 w-100" style={this.props.menuOpen ? menuOpen: menuClose}>
                {links.map((link, index) =>  
                    <NavLink key={index} index={index} link={link} />
                )}
            </ul>

        )
    }
}

export default MobileNavigationMenu
