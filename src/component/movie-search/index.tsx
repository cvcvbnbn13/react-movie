import React, { useState, useEffect, useCallback } from 'react';

import './style.scss';

import { useHistory } from 'react-router-dom';

import Button from '../button';

import { category } from 'api/tmdbApi/tmdbApi';

import { categoryType } from 'api/tmdbApi/types';

import { PropsType } from './types';

import Input from '../input';

const MovieSearch = (props: PropsType) => {
  const history = useHistory();
  // const { keyword } = useParams() as LooseObject;
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

  const goToSearch = useCallback(() => {
    props.setItems([]);
    if (keyword.length > 0) {
      history.push(`/${category[props.category]}/search/${keyword}`);
    }
    setKeyword('');
  }, [keyword, props.category, history]);

  useEffect(() => {
    const enterEvent = (e: any) => {
      e.preventDefault();
      if (e.keyword === 13) {
        goToSearch();
      }
    };
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div>
      <Input
        type="text"
        placeholder="搜尋"
        value={keyword}
        onChange={(e: any) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        搜尋
      </Button>
    </div>
  );
};

export default MovieSearch;
