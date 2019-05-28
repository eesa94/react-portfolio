import React, { Component } from 'react';
import Navbar from './Navigation/Navbar';
import { Container } from 'reactstrap';
import './Portfolio.css';
import Project from './Project';
import wallhaven634721 from '../img/wallhaven634721.jpg';
import gimbap from '../img/gimbap.jpg';
import eurobiketourss from '../img/eurobiketourss.jpg';
import { Footer } from './Footer';

export class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'Apex Automotive',
          image: `url(${wallhaven634721})`,
          description:
            'Everyday carry hella vice, hexagon yuccie affogato bicycle rights. Kale chips blue bottle direct trade humblebrag chambray vexillologist next level PBR&B gluten-free squid tofu man braid selfies. 3 wolf moon man braid chia fixie next level poutine, wolf gentrify photo booth cloud bread. Vinyl pug pabst artisan. Kinfolk tilde humblebrag, fanny pack +1 kale chips master cleanse bushwick hashtag.',
          url: 'https://apexautomotive.netlify.com/',
          github: 'https://github.com/eesa94/automotive'
        },
        {
          name: 'Seoul Food',
          image: `url(${gimbap})`,
          description:
            'Everyday carry hella vice, hexagon yuccie affogato bicycle rights. Kale chips blue bottle direct trade humblebrag chambray vexillologist next level PBR&B gluten-free squid tofu man braid selfies. 3 wolf moon man braid chia fixie next level poutine, wolf gentrify photo booth cloud bread. Vinyl pug pabst artisan. Kinfolk tilde humblebrag, fanny pack +1 kale chips master cleanse bushwick hashtag.',
          url: 'https://seoulfood.netlify.com/',
          github: 'https://github.com/eesa94/restaurant'
        },
        {
          name: 'Euro Bike Tours',
          image: `url(${eurobiketourss})`,
          description:
            'Everyday carry hella vice, hexagon yuccie affogato bicycle rights. Kale chips blue bottle direct trade humblebrag chambray vexillologist next level PBR&B gluten-free squid tofu man braid selfies. 3 wolf moon man braid chia fixie next level poutine, wolf gentrify photo booth cloud bread. Vinyl pug pabst artisan. Kinfolk tilde humblebrag, fanny pack +1 kale chips master cleanse bushwick hashtag.',
          url: 'https://eurobiketours.herokuapp.com/',
          github: 'https://github.com/eesa94/eurobiketours'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container
          fluid
          className='pageContainer portfolioContainer text-center'
        >
          <h1 className='pageHeader montserrat-9 mb3'>Portfolio</h1>
          {this.state.projects.map((project, index) => (
            <Project
              key={index}
              index={index}
              name={project.name}
              image={project.image}
              description={project.description}
              url={project.url}
              github={project.github}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
