import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class SkillIcon extends Component {
  state = {
    hovered: false
  };

  handleMouseEnter = () => {
    this.setState(
      {
        hovered: true
      },
      () => {
        document.addEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  handleMouseLeave = () => {
    this.setState(
      {
        hovered: false
      },
      () => {
        document.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  render() {
    const { icon, color } = this.props;

    const iconStyle = {
      color: color,
      height: '4em',
      width: '4em',
      marginRight: '15px',
      boxShadow: 'none',
      transition: '0.3s'
    };

    const iconHoverStyle = {
      boxShadow: `3px 3px 6px 0px ${color}`
    };

    return (
      <Icon
        icon={icon}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className='skillIcon'
        style={
          this.state.hovered ? { ...iconStyle, ...iconHoverStyle } : iconStyle
        }
      />
    );
  }
}

export default SkillIcon;
