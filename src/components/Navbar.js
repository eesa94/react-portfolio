import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Minus } from 'react-burgers';
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

    render() {

        return (
            <div>
                <nav className="d-flex justify-content-between align-items-center">
                    <Link to='/' className="brandLink">
                        <h1 className="brandName montserrat-6">Eesa Patel.</h1>
                    </Link>
                    <Minus
                        width={30}
                        lineHeight={2}
                        lineSpacing={6}
                        color='#5dfdd1'
                        active={this.state.active} 
                        onClick={() => { this.toggleBurger(); this.openMenu(); }} />
                </nav>

                <div className="menuContainer" onBlur={(e) => { e.preventDefault(); }} style={this.state}>
                    <ul className="menuList h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                        <li className="menuListItem">
                            <Link to='/' className="menuLink montserrat-9">
                                Home
                            </Link>
                        </li>
                        <li className="menuListItem">
                            <Link to='/about' className="menuLink montserrat-9">
                                About
                            </Link>
                        </li>
                        <li className="menuListItem">
                            <Link to='/portfolio' className="menuLink montserrat-9">
                                Portfolio
                            </Link>
                        </li>
                        <li className="menuListItem">
                            <Link to='/contact' className="menuLink montserrat-9">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default onClickOutside(Navbar)
