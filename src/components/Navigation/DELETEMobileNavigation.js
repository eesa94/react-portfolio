import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MobileNavigationMenu from './MobileNavigationMenu'
import { Minus } from 'react-burgers';


export class MobileNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
            active: false
        }

        this.toggleMenu=this.toggleMenu.bind(this);
    }
    
    toggleMenu = () => {
        console.log(this.state.menuOpen);
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    toggleBurger = () => {
        this.setState({
            active: !this.state.active
        })
    }


    render() {
        return (
                <div className="mobileNavigation d-flex flex-row justify-content-between align-items-center h-100">
                    <div className="brandContainer">
                        <Link to='/' className="brandLink">
                            <h1 className="brandName montserrat-6">Eesa Patel.</h1>
                        </Link>
                    </div>
                    <Minus
                        width={30}
                        lineHeight={3}
                        lineSpacing={4}
                        padding='5px'
                        color='var(--primary-colour)'
                        className="burger" 
                        active={this.state.active} 
                        onClick={() => { this.toggleBurger(); this.toggleMenu(); }}
                        />
                    <MobileNavigationMenu menuOpen={this.state.menuOpen} links={this.props.links} />
                </div>
        )
    }
}

export default MobileNavigation
