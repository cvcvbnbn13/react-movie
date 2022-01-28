import React, { useRef, ReactElement } from 'react';

import { ModalCotentPropsType } from './types';

const ModalContent = (props: ModalCotentPropsType) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    if (contentRef.current!.parentElement) {
      contentRef.current!.parentElement!.classList.remove('active');
    }
    if (props.onClose) props.onClose();
  };
  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default ModalContent;
