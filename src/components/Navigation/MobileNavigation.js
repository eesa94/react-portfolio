import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MobileNavigationMenu from './MobileNavigationMenu';


export class MobileNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false
        }

        this.toggleMenu=this.toggleMenu.bind(this);
    }
    
    toggleMenu = () => {
        console.log(this.state.menuOpen);
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }


    render() {
        return (
            <div className="h-100">
                <div className="mobileNavigation d-flex flex-row justify-content-between align-items-center h-100">
                    <div className="brandContainer">
                        <Link to='/' className="brandLink">
                            <h1 className="brandName montserrat-6">Eesa Patel.</h1>
                        </Link>
                    </div>
                    <button onClick={this.toggleMenu} className="btn btn-primary">Menu</button>
                </div>
                <MobileNavigationMenu menuOpen={this.state.menuOpen} links={this.props.links} />
            </div>
        )
    }
}

export default MobileNavigation
