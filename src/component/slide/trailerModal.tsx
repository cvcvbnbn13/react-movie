import React, { useRef } from 'react';
import Modal from '../modal';
import ModalContent from '../modal/modalContent';

import { ModalPropsType } from './types';

const Trailer = (props: ModalPropsType) => {
  const item = props.item;

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const onClose = () => iframeRef.current!.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="700px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default Trailer;
