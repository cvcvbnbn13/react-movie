import React, { useState, useEffect } from 'react';

import MovieCard from '../movie-card';
import MovieSearch from '../movie-search';

import { OutlineButton } from '../button';

import tmdbApi, { category, movie, tv } from 'api/tmdbApi/tmdbApi';

import { useParams } from 'react-router-dom';

import { PropsType, LooseObject, ItemsType } from './types';

import './style.scss';

const MovieGrid = (props: PropsType) => {
  // state
  const [items, setItems] = useState<ItemsType[]>([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { keyword } = useParams() as LooseObject;

  // methods

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movie.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tv.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPages(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movie.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tv.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  // main
  return (
    <>
      <div className="section mb-3">
        <MovieSearch
          category={props.category}
          keyword={keyword}
          setItems={setItems}
        />
      </div>
      <div className="movie-grid">
        {items.map(item => (
          <MovieCard category={props.category} item={item} key={item.id} />
        ))}
      </div>
      {page < totalPages ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            探索更多
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

export default MovieGrid;
