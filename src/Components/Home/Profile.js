import React, { useEffect, useRef, useState } from 'react';
import { init } from 'ityped';
import PortfolioData from '../../PortfolioData';
import './Profile.css';

const Profile = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Enthusiastic Developer  🔴',
        'Junior Full Stack Developer 💻',
        'MERN Stack Developer 😎',
      ],
    });
  }, []);

  // fixed Header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0);
  });

  const [show, setShow] = useState(false);

  return (
    <div className='home' id='Home'>
      <div className='home_bg'>
        <div className='header d__flex align__items__center pxy__30'>
          <div className='logo'>
            <span>Ahlem Tlili</span>
          </div>
          <div className='navigation pxy__30'>
            <ul className='navbar d__flex'>
              <a href='#Home'>
                <li className='nav__items mx__15'>Home</li>
              </a>
              <a href='#About'>
                <li className='nav__items mx__15'>About</li>
              </a>
              <a href='#Cursus'>
                <li className='nav__items mx__15'>Cursus</li>
              </a>
              <a href='#Skills'>
                <li className='nav__items mx__15'>Skills</li>
              </a>
              <a href='#Portfolio'>
                <li className='nav__items mx__15'>Portfolio</li>
              </a>
              <a href='#Contact'>
                <li className='nav__items mx__15'>Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className='toggle__menu'>
            <svg
              onClick={() => setShow(!show)}
              xmlns='http://www.w3.org/2000/svg'
              width='45'
              height='30'
              fill='currentColor'
              class='bi bi-justify white pointer'
              viewBox='0 0 16 16'>
              <path
                fill-rule='evenodd'
                d='M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </div>
          {show ? (
            <div className='sideNavbar'>
              <ul className='sidebar d__flex'>
                <li className='sideNavbar'>
                  <a href='#Home'>Home</a>
                </li>
                <li className='sideNavbar'>
                  <a href='#About'>About</a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Cursus'>Cursus</a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Skills'>Skills</a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Portfolio'>Portfolio</a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Contact'>Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {/* HOME CONTENT*/}
        <div className='profile_container container'>
          <div className='home_content'>
            <div className='home__meta'>
              <h1 className='home__text pz__10'>
                WELCOME GUYS, PLEASE FEEL FREE TO CONTACT ME
              </h1>
              <h2 className='home__text pz__10'>
                Hi, I'm
                <span className='home__text pz__10 blue'>
                  {PortfolioData.name}
                </span>
              </h2>
              <h3>
                <span className='home__text pz__10' ref={textRef}></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
