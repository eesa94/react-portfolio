import React, { Component, Fragment } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Minus } from 'react-burgers';
import NavMenu from './NavMenu';

class Navbar extends Component {
  state = {
    links: ['Home', 'About', 'Portfolio', 'Contact'],
    menuOpen: false,
    active: false
  };

  toggleBurger = () => {
    this.setState({
      active: !this.state.active
    });
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const navMenuStyle = this.state.menuOpen ? { left: 0 } : { left: '-200%' };

    return (
      <Fragment>
        <nav>
          <div className='brand'>
            <h3 className='white'>Brandname</h3>
          </div>
          <Minus
            width={30}
            lineHeight={3}
            lineSpacing={4}
            padding='5px'
            color='var(--primary-colour)'
            className='burger'
            active={this.state.active}
            onClick={() => {
              this.toggleBurger();
              this.toggleMenu();
            }}
          />
        </nav>
        <NavMenu style={navMenuStyle} links={this.state.links} />
      </Fragment>
    );
  }
}

export default Navbar;
