import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

import bg from 'assets/footer-bg.jpg';
import logo from 'assets/logo.png';

const Footer = (): JSX.Element => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">首頁</Link>
            <Link to="/">聯絡我們</Link>
            <Link to="/">服務條款</Link>
            <Link to="/">關於我們</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">媒體中心</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">隱私條款</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">工作機會</Link>
            <Link to="/">禮卡</Link>
            <Link to="/">法律聲明</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
