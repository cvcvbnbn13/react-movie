import React from 'react';
import './style.scss';

const Button = (props: any) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : undefined}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props: any): JSX.Element => {
  return (
    <button
      className={`btn btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : undefined}
    >
      {props.children}
    </button>
  );
};

export default Button;
