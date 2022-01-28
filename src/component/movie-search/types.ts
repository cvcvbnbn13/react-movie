import { categoryType } from 'api/tmdbApi/types';

export interface PropsType {
  keyword: string;
  category: categoryType;
  setItems: Function;
}
