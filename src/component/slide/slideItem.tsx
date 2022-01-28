import React from 'react';
import { useHistory } from 'react-router';
import apiConfig from '../../api/apiConfig';
import Button, { OutlineButton } from '../../component/button';
import tmdbApi, { category } from '../../api/tmdbApi/tmdbApi';
import './style.scss';

import { ItemsPropsType } from './types';

const SlideItem = (props: ItemsPropsType) => {
  let history = useHistory();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  // method
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    console.log(item.id);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      modal!
        .querySelector('.modal__content > iframe')!
        .setAttribute('src', videoSrc);
    } else {
      alert('無預告片');
      return;
    }
    modal!.classList.toggle('active');
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push('/movie/' + item.id)}>
              watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
