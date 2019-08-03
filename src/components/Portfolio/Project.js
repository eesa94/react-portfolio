import React from 'react';
import './Project.css';
import SkillIcon from './SkillIcon';
import CustomButton from '../Button/CustomButton';

const Project = ({ index, name, image, description, url, github, tech }) => {
  return (
    <div className='row' key={index}>
      <div
        className='col-12 col-lg-6 projectCol'
        style={{ borderRight: '2px solid white' }}>
        <div className='projectSectionOne'>
          <h1 className='projectName montserrat-9'>{name}</h1>
          <div className='mb3'>
            {description.map((item, index) => (
              <p className='montserrat-5 projectDescription' key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className='skillContainer'>
            <div className='mb3'>
              {tech.map((tech, index) => (
                <SkillIcon key={index} icon={tech.icon} color={tech.color} />
              ))}
            </div>
            <CustomButton
              linkTo={github}
              size={'Small'}
              text={'Project Repo'}
            />
          </div>
        </div>
      </div>
      <div
        className='col-12 col-lg-6 projectCol backgroundImage'
        style={{ backgroundImage: image }}>
        <div className='imageOverlay'>
          <CustomButton linkTo={url} size={'Large'} text={'View Project'} />
        </div>
      </div>
    </div>
  );
};

export default Project;
