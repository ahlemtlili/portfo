import React from 'react';
import BackEnd from './img/back-end.png';
import FrontEnd from './img/front-end.png';
import Github from './img/github.png';
import Database from './img/database.png';

export default {
  name: 'Ahlem Tlili',
  address: 'Elguettar Gafsa',
  phone: '+216 41 10 30 45',
  job: 'Full Stack JS developer',
  email: 'ahlem.tlili@gmail.com',
  LinkedIn : 'https://www.linkedin.com/in/ahlem-tlili-918457138/',

  skills: [
    {
      image: (
        <img
          src={FrontEnd}
          alt='Front End'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'FRONT-END',
      description: ['ReactJS', 'JavaScript', 'ES6', 'Bootstrap', 'Material UI'],
    },
    {
      image: (
        <img
          src={BackEnd}
          alt='Back End'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'BACK-END',
      description: ['NodeJS', 'Express'],
    },
    {
      image: (
        <img
          src={Database}
          alt='Databases'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'DATABASES',
      description: ['MongoDB', 'MySQL'],
    },
    {
      image: (
        <img
          src={Github}
          alt='Source Control'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'SOURCE CONTROL',
      description: ['Git', 'Github'],
    },
  ],
};
