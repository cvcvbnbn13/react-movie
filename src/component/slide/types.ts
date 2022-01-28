export interface ItemsPropsType {
  item: {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    id: number;
  };
  className: string;
}

export interface ModalPropsType {
  item: {
    id: number;
  };
}
