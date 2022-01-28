import axiosClient from '../axiosClient';
import { movieType, categoryType, tvType } from './types';

export const category = {
  movie: categoryType.movie,
  tv: categoryType.tv,
};

export const movie = {
  upcoming: movieType.upcoming,
  popular: movieType.popular,
  now_playing: movieType.now_playing,
  top_rated: movieType.top_rated,
};

export const tv = {
  popular: tvType.popular,
  top_rated: tvType.top_rated,
  on_the_air: tvType.on_the_air,
};

const tmdbApi = {
  getMoviesList: (type: movieType, params: {}) => {
    const url = 'movie/' + movie[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type: tvType, params: any) => {
    const url = 'tv/' + tv[type];
    return axiosClient.get(url, params);
  },
  getVideos: (type: categoryType, id: number) => {
    const url = category[type] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (type: categoryType, params: any) => {
    const url = 'search/' + category[type];
    return axiosClient.get(url, params);
  },
  detail: (type: categoryType, id: number, params: any) => {
    const url = category[type] + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (type: categoryType, id: number) => {
    const url = category[type] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (type: categoryType, id: number) => {
    const url = category[type] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
