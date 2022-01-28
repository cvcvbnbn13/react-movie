import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

import Button from '../button';

import { category } from 'api/tmdbApi/tmdbApi';
import { categoryType } from 'api/tmdbApi/types';
import apiConfig from 'api/apiConfig';

import { PropsType } from './types';

const MovieCard = (props: PropsType) => {
  const { item } = props;

  const link = '/' + category[props.category] + '/' + item.id;

  const bg = apiConfig.w500image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
