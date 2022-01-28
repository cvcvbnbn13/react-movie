const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apikey: '34d7cd7cebdc9be59a0127c3033d2c2d',
  originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
