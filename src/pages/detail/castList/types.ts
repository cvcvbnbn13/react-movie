import { categoryType } from 'api/tmdbApi/types';

export interface LooseObject {
  category: categoryType;
}

export interface CreditsType {
  name: string;
  profile_path: string | null;
}

export interface PropsType {
  id: number;
}
