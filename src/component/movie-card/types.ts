import { categoryType } from 'api/tmdbApi/types';

export interface PropsType {
  category: categoryType;
  item: {
    id: number;
    poster_path?: string;
    backdrop_path?: string;
    title?: string;
    name?: string;
  };
}
