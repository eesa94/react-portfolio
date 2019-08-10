import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
  state = {
    activeLink: -1
  };

  handleMouseEnter(index) {
    this.setState(
      {
        activeLink: index
      },
      () => {
        document.addEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  }

  handleMouseLeave = () => {
    this.setState(
      {
        activeLink: -1
      },
      () => {
        document.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  render() {
    const { index, link, toggleMenu, toggleBurger } = this.props;
    // variable for home link
    const linkHome = '/';
    // variable for other links apart from home - remove white space
    const linkOther = link.toLowerCase().replace(/\s+/g, '');

    return (
      <li
        className='menuListItem'
        onMouseEnter={this.handleMouseEnter.bind(this, index)}
        onMouseLeave={this.handleMouseLeave.bind(this)}>
        <Link
          to={index === 0 ? linkHome : linkOther}
          className='menuLink montserrat-7'
          onClick={() => {
            toggleBurger();
            toggleMenu();
          }}>
          {link}
        </Link>
      </li>
    );
  }
}

export default NavLink;
