import React from 'react';
import './NewProject.css';

const NewProject = ({ index, name, image, description, url, github }) => {
  return (
    <div className='row projectRow' key={index}>
      <div
        className='col-6 projectCol'
        style={{ borderRight: '2px solid white' }}>
        <div className='projectSectionOne'>
          <h1 className='projectName montserrat-9'>{name}</h1>
          <p>{description}</p>
          <h2>Tech used</h2>
        </div>
      </div>
      <div
        className='col-6 projectCol backgroundImage'
        style={{ backgroundImage: image }}>
        <div className='imageOverlay'>
          <button className='btn montserrat-7 projectButton'>
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
