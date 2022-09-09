import React from 'react';
import PortfolioData from '../../PortfolioData';
import './Skills.css';

function Skills(props) {
  return (
    <div className='skill component__space' id='Skills'>
      <div className='heading'>
        <h1 className='skills__heading'>SKILLS</h1>
      </div>

      <div className='container'>
        <div className='row'>
          {PortfolioData.skills.map(skill => (
            <div className='col__3'>
              <div className='skill__box pointer'>
                <div className='icon'>{skill.image}</div>
                <div className='skill__meta'>
                  <h1 className='skill__text'>{skill.title}</h1>
                </div>

                <div className='skills__name'>
                  {skill.description.map(element => (
                    <div className='skill__details'>
                      <p className='p__color'>{element}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
