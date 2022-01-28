import React from 'react';

import { useParams } from 'react-router-dom';

import PageHeader from '../component/page-header';

import MovieGrid from '../component/movie-grid';

import { category as cate } from 'api/tmdbApi/tmdbApi';

interface LooseObject {
  [key: string]: any;
}

const Catalog: React.FC = (): JSX.Element => {
  const { category } = useParams() as LooseObject;

  return (
    <>
      <PageHeader>{category === cate.movie ? '電影' : '影集'}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}></MovieGrid>
        </div>
      </div>
    </>
  );
};

export default Catalog;
