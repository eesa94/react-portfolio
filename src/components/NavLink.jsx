import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class NavLink extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeLink: -1
        }
    }
    
    handleMouseEnter(index) {
        this.setState({
            activeLink: index
        }, () => {
            document.addEventListener('mouseleave', this.handleMouseLeave);
        });
    }

    handleMouseLeave = () => {
        this.setState({
            activeLink: -1
        }, () => {
            document.removeEventListener('mouseleave', this.handleMouseLeave);
        });
    }


    render() {

        // index prop for accessing array index
        const index = this.props.index;
        // link prop
        const link = this.props.link;
        // variable for link text
        const linkName = link;
        // variable for home link
        const linkHome = '/';
        // variable for other links apart from home - remove white space
        const linkOther = link.toLowerCase().replace(/\s+/g, '');
        
        const menuLinkClass = 'menuLink montserrat-5';

        return (
            <li className='menuListItem'
            onMouseEnter={this.handleMouseEnter.bind(this, index)}
            onMouseLeave={this.handleMouseLeave.bind(this)} >
                <Link to={index === 0 ? linkHome : linkOther} className={this.state.activeLink === index ? menuLinkClass + ' menuLinkActive' : menuLinkClass}>
                    {linkName}
                </Link>
                <div className={this.state.activeLink === index ? 'linkUnderline linkUnderlineActive' : 'linkUnderline'}>
                </div>
            </li>
            
        )
    }
}

export default NavLink

