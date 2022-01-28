import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { navType } from './types';
import './style.scss';

const headerNav: Array<navType> = [
  {
    display: '首頁',
    path: '/',
  },
  {
    display: '電影',
    path: '/movie',
  },
  {
    display: '影集',
    path: '/tv',
  },
];

const Header: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const active = headerNav.findIndex(e => e.path === pathname);

  // hook
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current!.classList.add('shrink');
      } else {
        headerRef.current!.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.addEventListener('scroll', shrinkHeader);
    };
  }, []);

  // main
  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={e.display} className={`${i === active ? 'active' : ''}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
