import React from 'react';
import { Row, Col } from 'reactstrap';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <Row className="mb2">
        <Col xs={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} className="contactIconsContainer">
            <a href="https://unsplash.com/@eesa94" target="_blank" rel="noopener noreferrer" title="View my photos on Unsplash">
                <i className="fas fa-camera contactIcon" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/eesa516" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram">
                <i className="fab fa-instagram contactIcon" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/eesa-patel-a89942b1/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">
                <i className="fab fa-linkedin-in contactIcon" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/eesa94" target="_blank" rel="noopener noreferrer" title="View my GitHub profile">
                <i className="fab fa-github contactIcon" aria-hidden="true"></i>
            </a>
        </Col>
    </Row>
    )
}

export default SocialLinks
