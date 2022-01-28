import { useState, useEffect, ReactElement } from 'react';
import './style.scss';

import { ModalPropsType } from './types';

const Modal = (props: ModalPropsType) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);
  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  );
};

export default Modal;
