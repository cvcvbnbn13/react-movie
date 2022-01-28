import React from 'react';

import './style.scss';

import { PropsType } from './types';

import bg from 'assets/footer-bg.jpg';

const PageHeader = (props: PropsType) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
