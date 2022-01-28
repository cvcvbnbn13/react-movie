import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { LooseObject, CreditsType, PropsType } from './types';

import tmdbApi from 'api/tmdbApi/tmdbApi';
import apiConfig from 'api/apiConfig';

import './style.scss';

const CastList = (props: PropsType) => {
  const { category } = useParams() as LooseObject;

  const [casts, setCasts] = useState<CreditsType[]>([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <div className="casts">
      {casts.map(item => (
        <div key={item.name} className="casts__item">
          <div
            className="casts__item__img"
            style={
              item.profile_path
                ? {
                    backgroundImage: `url(${apiConfig.w500image(
                      item.profile_path
                    )})`,
                  }
                : {
                    backgroundImage:
                      'linear-gradient(to top, #485563, #29323c)',
                  }
            }
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
