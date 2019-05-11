import React, { Component } from 'react';
import './Navbar.css';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import MediaQuery from 'react-responsive';

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

            <nav>
                <MediaQuery maxWidth={991}>
                    <MobileNavigation links={this.state.links} />
                </MediaQuery>
                <MediaQuery minWidth={992}>
                    <DesktopNavigation links={this.state.links} />
                </MediaQuery>
            </nav>
        
        )
    }
}

export default Navbar
