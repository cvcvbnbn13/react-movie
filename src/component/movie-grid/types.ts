import { categoryType } from 'api/tmdbApi/types';

export interface LooseObject {
  [key: string]: any;
}

export interface ItemsType {
  id: number;
}

export interface PropsType {
  category: categoryType;
}
