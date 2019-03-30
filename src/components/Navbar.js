import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Squeeze } from 'react-burgers';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }

    }
    
    toggleBurger = () => {
        this.setState({
            active: !this.state.active
        });
    }


    render() {

        return (
            <nav className="d-flex justify-content-between align-items-center">
                <Link to='/' className="brandLink">
                    <h1 className="brandName montserrat-6">Eesa Patel.</h1>
                </Link>
                <Squeeze
                    active={this.state.active} 
                    onClick={() => { this.toggleBurger(); }} />
            </nav>
        )
    }
}

export default Navbar
