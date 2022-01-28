import React from 'react';
import { Link } from 'react-router-dom';
import Slide from '../component/slide';
import MovieList from '../component/movie-list';

import { OutlineButton } from '../component/button';
import { category, movie, tv } from '../api/tmdbApi/tmdbApi';

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Slide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>熱門電影</h2>
            <Link to="/movie">
              <OutlineButton className="small">探索更多</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movie.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>最高評價電影</h2>
            <Link to="/movie">
              <OutlineButton className="small">探索更多</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movie.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>熱門影集</h2>
            <Link to="/movie">
              <OutlineButton className="small">探索更多</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tv.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>最高評價影集</h2>
            <Link to="/movie">
              <OutlineButton className="small">探索更多</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tv.top_rated} />
        </div>
      </div>
    </div>
  );
};

export default Home;
