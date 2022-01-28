import React, { useState, useEffect } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { movie } from '../../api/tmdbApi/tmdbApi';
import SlideItem from './slideItem';
import Trailer from './trailerModal';

import './style.scss';

const Slide = () => {
  //Swiper
  SwiperCore.use([Autoplay]);
  // state
  const [movieItems, setMovieItems] = useState([]);

  // hook
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movie.popular, { params });
        setMovieItems(response.results.slice(1, 10));
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map(item => {
          return (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <SlideItem
                  item={item}
                  className={`${isActive ? 'active' : ''}`}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {movieItems.map(item => (
        <Trailer key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Slide;
