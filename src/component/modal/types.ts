import { ReactElement } from 'react';

export interface ModalPropsType {
  active: boolean;
  id: string;
  children?: ReactElement;
}

export interface ModalCotentPropsType {
  onClose: Function;
  children?: ReactElement;
}
