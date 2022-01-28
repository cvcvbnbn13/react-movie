export enum categoryType {
  movie = 'movie',
  tv = 'tv',
}

export enum movieType {
  upcoming = 'upcoming',
  now_playing = 'now_playing',
  popular = 'popular',
  top_rated = 'top_rated',
}

export enum tvType {
  popular = 'popular',
  top_rated = 'top_rated',
  on_the_air = 'on_the_air',
}

export type tmovieType = categoryType | movieType | tvType;
