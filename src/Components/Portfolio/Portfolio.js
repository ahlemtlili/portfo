import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Project_background from '../../img/project_bg.jpg';

import './Portfolio.css';

function Project() {
  return (
    <div className='project component__space' id='Portfolio'>
      <div className='heading'>
        <h1 className='portfolio__heading'>My Latest Project</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
              
                <div className='mask__effect'></div>
              </div> </div> </div>

          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img
                    src={Project_background}
                    alt=''
                    className='project__img'
                  />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>Site Web Pour Ecole</h5>
                <p className='project__text'>
                  A website developed after the end of a professional 5 months
                  training with GO MY CODE. In this website, I used all the
                  tools we learned as a Full Stack JS developer. It is dedicated
                  to Primary students and teachers.
                </p>
                <div className='tools'>
                  <label className='tool'>CSS</label>
                  <label className='tool'>React JS</label>
                  <label className='tool'>Express</label>
                  <label className='tool'>Node JS</label>
                  <label className='tool'>MongoDB</label>
                </div>
                <a
                  href='https://github.com/ahlemtlili/pff_gomycode'
                  target='_blank'>
                  <GitHubIcon className='github__link' />
                </a>
              </div>
            </div>
          </div>

          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img
                    src={Project_background}
                    alt=''
                    className='project__img'
                  />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>Todo-List</h5>
                <p className='project__text'>
                  A front-end website interface that allows you to create, read,
                  update and delete (CRUD) your to-dos.
                </p>
                <div className='tools'>
                  <label className='tool'>HTML5</label>
                  <label className='tool'>CSS3</label>
                  <label className='tool'>JavaScript</label>
                  <label className='tool'>React Redux</label>
                  <label className='tool'>DOM</label>
                  <label className='tool'>Bootstrap</label>
                </div>
                <a
                  href='https://github.com/ahlemtlili/checkredux'
                  target='_blank'>
                  <GitHubIcon className='github__link' />
                </a>
              </div>
            </div>
          </div>

          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img
                    src={Project_background}
                    alt=''
                    className='project__img'
                  />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>Movie App</h5>
                <p className='project__text'>
                  A front-end website interface for movies, where the user can
                  add a movie that doesn't exist in the list, search for movies
                  or filter by rating and names.
                </p>
                <div className='tools'>
                  <label className='tool'>CSS</label>
                  <label className='tool'>React JS</label>
                  <label className='tool'>Express</label>
                  <label className='tool'>Node JS</label>
                  <label className='tool'>MongoDB</label>
                </div>
                <a
                  href='https://github.com/ahlemtlili/checkhooks'
                  target='_blank'>
                  <GitHubIcon className='github__link' />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Project;
