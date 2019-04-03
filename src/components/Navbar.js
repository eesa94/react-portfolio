import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import onClickOutside from 'react-onclickoutside';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            top: '-200%'
        }
    }
    
    
    openMenu = () => {
        this.setState({
            top: '0'
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    
    closeMenu = () => {
        this.setState({
            top: '-200%'
        }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    
    toggleBurger = () => {
        this.setState({
            active: !this.state.active
        });
    }

    handleClickOutside = () => {
        if (this.state.active === true) {
            this.toggleBurger();
        } else {
            return;
        }
    }

    menuClick = (e) => {
        e.preventDefault();
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
                    <li className="menuListItem">
                        <Link to='/' className="menuLink montserrat-5">
                            Home
                        </Link>
                    </li>
                    <li className="menuListItem">
                        <Link to='/about' className="menuLink montserrat-5">
                            About
                        </Link>
                    </li>
                    <li className="menuListItem">
                        <Link to='/portfolio' className="menuLink montserrat-5">
                            Portfolio
                        </Link>
                    </li>
                    <li className="menuListItem">
                        <Link to='/contact' className="menuLink montserrat-5">
                            Contact
                        </Link>
                    </li>
                </ul>

            </nav>
        
        )
    }
}

export default onClickOutside(Navbar)
