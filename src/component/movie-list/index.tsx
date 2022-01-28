import React, { useState, useEffect } from 'react';
import './style.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import MovieCard from '../movie-card';

import tmdbApi, { category } from 'api/tmdbApi/tmdbApi';

import { itemsType } from './types';

const MovieList = (props: any) => {
  const [items, setItems] = useState<itemsType[]>([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          case category.tv:
            response = await tmdbApi.getTvList(props.type, { params });
            break;
          default:
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id!);
      }
      setItems(response.results);
    };
    getList();
  }, [props.category, props.id, props.type]);

  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          600: { width: 600, slidesPerView: 3 },
          1024: { width: 1024, slidesPerView: 4 },
        }}
        loop={true}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
