import React, { useState, useEffect } from 'react';

import MovieCard from '../movie-card';
import MovieSearch from '../movie-search';

import Button, { OutlineButton } from '../button';

import tmdbApi, { category, movie, tv } from 'api/tmdbApi/tmdbApi';

import { categoryType } from 'api/tmdbApi/types';

import { useParams, useLocation } from 'react-router-dom';

import { PropsType, LooseObject, ItemsType } from './types';

import './style.scss';

const MovieGrid = (props: PropsType) => {
  // state
  const [items, setItems] = useState<ItemsType[]>([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { keyword } = useParams() as LooseObject;
  const path = useLocation();
  const [pName, setPName] = useState<string>(path.pathname);

  // methods

  const loadMore = async () => {
    setPage(page + 1);
  };

  // hook

  useEffect(() => {
    console.log(path);

    const getList = async (targetPage: number) => {
      let response = null;

      if (keyword === undefined) {
        const params = {
          page: targetPage,
        };
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movie.popular, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tv.popular, { params });
        }
      } else {
        const params = { page: targetPage, query: keyword };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems([...items, ...response.results]);
      setTotalPages(response.total_pages);
    };
    getList(page);
    if ('/' + props.category !== pName) {
      setPage(1);
      setItems([]);
      setPName(path.pathname);
      window.scrollTo(0, 0);
    } else {
      getList(page);
    }
  }, [props.category, keyword, page, path.pathname, pName]);

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
