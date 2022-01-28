import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import tmdbApi from 'api/tmdbApi/tmdbApi';

import { LooseObject, VideoType } from './types';

import Oxo from './Oxo';

const VideoList = (props: any) => {
  const { category } = useParams() as LooseObject;

  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    const getVideo = async () => {
      const response = await tmdbApi.getVideos(category, props.id);
      if (response.results.length > 0) {
        setVideos(response.results.slice(0, 1));
      }
      console.log(response);
    };
    getVideo();
  }, [category, props.id, videos]);

  return (
    <>
      {videos.map(item => (
        <>
          <Oxo item={item} />
        </>
      ))}
    </>
  );
};

export default VideoList;
