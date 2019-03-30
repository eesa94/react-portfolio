import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Minus } from 'react-burgers';

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
                <div className="menuContainer" style={this.state} >
                </div>
            </div>
        )
    }
}

export default Navbar
