import React, { Component } from 'react';
import './Navbar.css';
import NavLink from './NavLink';

class NavMenu extends Component {
  state = {
    activeLink: -1
  };

  render() {
    const { style, links } = this.props;

    return (
      <div className='navigationMenuContainer' style={style}>
        <ul className='menuList'>
          {links.map((link, index) => (
            <NavLink key={index} index={index} link={link} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NavMenu;
