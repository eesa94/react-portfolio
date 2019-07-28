import React, { Fragment } from 'react';
import './Project.css';

const Project = ({ index, name, image, description, url, github }) => {
  return (
    <Fragment>
      <div
        className='col-12 col-lg-6 projectCol'
        style={{ borderRight: '2px solid white' }}>
        <div className='projectSectionOne'>
          <h1 className='projectName montserrat-9'>{name}</h1>
          {description.map((item) => (
            <p className='montserrat-5 projectDescription'>{item}</p>
          ))}
          <h2>Tech used</h2>
        </div>
      </div>
      <div
        className='col-12 col-lg-6 projectCol backgroundImage'
        style={{ backgroundImage: image }}>
        <div className='imageOverlay'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <button className='btn montserrat-7 projectButton'>
              View Project
            </button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
