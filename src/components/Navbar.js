import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import onClickOutside from 'react-onclickoutside';

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
            activeLink: -1
        }

    }

    handleMouseEnter(index) {
        console.log('mouse enter');

        this.setState({
            activeLink: index
        }, () => {
            document.addEventListener('mouseleave', this.handleMouseLeave);
        });
    }

    handleMouseLeave = () => {
        console.log('mouse leave');

        this.setState({
            activeLink: -1
        }, () => {
            document.removeEventListener('mouseleave', this.handleMouseLeave);
        });
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
                    {this.state.links.map((link, index) =>  
                        <li
                        key={index}
                        className={this.state.activeLink === index ? 'menuListItem menuListItemActive' : 'menuListItem'}
                        onMouseEnter={this.handleMouseEnter.bind(this, index)}
                        onMouseLeave={this.handleMouseLeave.bind(this)}
                        >
                            {
                                index === 0 ? 
                                    <Link to={'/'} className="menuLink montserrat-5">
                                        Home
                                    </Link>  
                                : 
                                    <Link to={'/' + link} className="menuLink montserrat-5">
                                        {link}
                                    </Link>
                            }    

                            
                        </li>
                    )}
                </ul>
            </nav>
        
        )
    }
}

export default Navbar
