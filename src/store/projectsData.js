import react_playground from '../img/react_playground.jpg';
import currency_converter from '../img/currency_converter.jpg';
import wedding_rsvp from '../img/wedding_rsvp.jpg';
import apex_automotive from '../img/apex_automotive.jpg';
import seoul_food from '../img/seoul_food.jpg';
import euro_bike_tours from '../img/euro_bike_tours.jpg';
import zenith_cosmetics from '../img/zenith_cosmetics.jpg';
import low_ambition from '../img/low_ambition.jpg';
import { skills } from './skillsData';

export const projects = [
  {
    name: 'React Playground',
    image: `url(${react_playground})`,
    description: [
      'One of my ongoing projects, I am using this site as a place to experiment with features, build components, and practice my front end skills by replicating interesting features I see on other websites.'
    ],
    url: 'https://eesa-react-playground.netlify.com/',
    github: 'https://github.com/eesa94/react-playground',
    tech: [
      skills.html,
      skills.css,
      skills.bootstrap,
      skills.javascript,
      skills.react
    ]
  },
  {
    name: 'Currency Converter',
    image: `url(${currency_converter})`,
    description: [
      'My first mobile project, this simple application pulls up-to-date FX rates from the Fixer.io API, and allows you to perform basic currency conversions.',
      'In addition, the theme colour can be changed, and selected currencies can be swapped.'
    ],
    url: 'https://expo.io/@eesa94/currencyconverter',
    github: 'https://github.com/eesa94/currencyconverter',
    tech: [skills.javascript, skills.react, skills.redux]
  },
  {
    name: 'Wedding RSVP',
    image: `url(${wedding_rsvp})`,
    description: [
      "For my brother's wedding, I built a full-stack RSVP app from scratch, using what I learned during my online web dev course.",
      'A Postgres database was used to store all of the invited guests. I used email-only authentication, so that guests could log in simply by using the same email address which received the invitation. Authentication was set up such that only email addresses stored in the database could log in, preventing uninvited guests from accessing the RSVP section.',
      "Upon completing the RSVP form and hitting submit, the guest's response was sent to a specific RSVP email address using Rails' ActionMailer, where organisers could see which guests had accepted and which had declined."
    ],
    url: 'https://jessaadil.herokuapp.com/',
    github: 'https://github.com/eesa94/weddingapp',
    tech: [
      skills.html,
      skills.css,
      skills.bootstrap,
      skills.javascript,
      skills.jquery,
      skills.ruby,
      skills.rails
    ]
  },
  {
    name: 'Apex Automotive',
    image: `url(${apex_automotive})`,
    description: [
      'Having spent a lot of time browsing automotive websites and researching car modification, I noticed that many companies have dated websites and UI.',
      'This project was an attempt at creating a modern, updated web presence for an automotive company, using a cleaner, updated UI.',
      'I experimented with custom parallax effects, and a user-friendly way of showcasing the services and products on offer.'
    ],
    url: 'https://apexautomotive.netlify.com/',
    github: 'https://github.com/eesa94/automotive',
    tech: [
      skills.html,
      skills.css,
      skills.bootstrap,
      skills.javascript,
      skills.jquery
    ]
  },
  {
    name: 'Seoul Food',
    image: `url(${seoul_food})`,
    description: [
      'My first deployed React application, this project is an online presence for a fictional restaurant specialising in Korean cuisine.',
      'I was keen to put my newly-learned skills into practice after starting to learn React around September/October 2018.'
    ],
    url: 'https://seoulfood.netlify.com/',
    github: 'https://github.com/eesa94/restaurant',
    tech: [
      skills.html,
      skills.css,
      skills.bootstrap,
      skills.javascript,
      skills.react
    ]
  },
  {
    name: 'Euro Bike Tours',
    image: `url(${euro_bike_tours})`,
    description: [
      'The main project which was completed as part of my online web dev course. It is an e-commerce store built on Rails, featuring user authentication, authorisation, comments, caching, testing, security, and asynchronous request handling.',
      'The primary focus of this project was the back end; the goal being to build a robust, full-stack application which would meet all of the functional requirements on the back end and in theory go live as a real e-commerce store.'
    ],
    url: 'https://eurobiketours.herokuapp.com/',
    github: 'https://github.com/eesa94/eurobiketours',
    tech: [
      skills.html,
      skills.css,
      skills.bootstrap,
      skills.jquery,
      skills.ruby,
      skills.rails
    ]
  },
  {
    name: 'Zenith Cosmetics',
    image: `url(${zenith_cosmetics})`,
    description: [
      'Another one of my earlier projects, the aim was to create a sleek, minimal SPA',
      'I chose a hero which is both minimal and in keeping with the industry of this fictional company, and a colour palette of light pink and mintcream to contrast with dark text.',
      'I went with the idea of full page background images with text overlayed as I found this to be aesthetically pleasing and gave me the chance to experiment with different layouts and positioning.'
    ],
    url: 'https://zenithcosmetics.netlify.com/',
    github: 'https://github.com/eesa94/zenith',
    tech: [skills.html, skills.css, skills.bootstrap, skills.jquery]
  },
  {
    name: 'Low Ambition',
    image: `url(${low_ambition})`,
    description: [
      'One of my first projects from early 2018, this is a simple static site for a ficitonal car enthusiast group.',
      'I used a single background image for the entire site, and a simple colour scheme of dark blue and faded yellow.'
    ],
    url: 'https://low-ambition.netlify.com/',
    github: 'https://github.com/eesa94/low-ambition',
    tech: [skills.html, skills.css, skills.bootstrap, skills.jquery]
  }
];
