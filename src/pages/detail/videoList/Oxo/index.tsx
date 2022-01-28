import React, { useRef, useEffect } from 'react';

import './style.scss';

const Oxo = (id: any) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const height = (iframeRef.current!.offsetWidth * 9) / 16 + 'px';
    iframeRef.current!.setAttribute('height', height);
  }, []);

  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default Oxo;
