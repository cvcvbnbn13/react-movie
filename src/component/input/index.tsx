import React from 'react';

import { PropsType } from './types';

import './style.scss';

const Input = (props: PropsType) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange!}
    />
  );
};

export default Input;
