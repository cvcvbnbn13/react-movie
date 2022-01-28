import { categoryType } from 'api/tmdbApi/types';

export interface LooseObject {
  category: categoryType;
  id: string;
}

interface genres {
  id: number;
  name: string;
}

export interface ItemsType {
  backdrop_path: string;
  poster_path: string;
  name: string;
  title: string;
  genres: Array<genres>;
  overview: string;
  id: number;
}
