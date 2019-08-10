import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Minus } from 'react-burgers';
import NavMenu from './NavMenu';
import './Navigation.css';

class NavBar extends Component {
  state = {
    links: ['Home', 'About', 'Portfolio', 'Contact'],
    menuOpen: false,
    active: false
  };

  toggleBurger = () => {
    this.setState({
      active: !this.state.active
    });
    if (!this.state.active) {
      this.setState({
        menuOpen: false
      });
    }
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    return (
      <Fragment>
        <div className='brand'>
          <Link to='/' className='brandLink'>
            <h1 className='brandName montserrat-9'>Eesa.uk</h1>
          </Link>
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
          style={{ zIndex: 500, position: 'fixed' }}
        />
        <NavMenu
          menuOpen={this.state.menuOpen}
          links={this.state.links}
          toggleMenu={this.toggleMenu}
          toggleBurger={this.toggleBurger}
        />
      </Fragment>
    );
  }
}

export default NavBar;
