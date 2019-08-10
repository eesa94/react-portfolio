import React, { Component } from 'react';
import NavLink from './NavLink';

class NavMenu extends Component {
  state = {
    activeLink: -1
  };

  render() {
    const { menuOpen, links } = this.props;
    const navMenuStyle = menuOpen ? { height: '100%' } : { height: '0' };
    const navMenuListStyle = menuOpen ? { opacity: 1 } : { opacity: 0 };

    return (
      <div className='navMenuContainer' style={navMenuStyle}>
        <ul className='navMenuList' style={navMenuListStyle}>
          {links.map((link, index) => (
            <NavLink key={index} index={index} link={link} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NavMenu;
