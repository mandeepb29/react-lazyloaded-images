import React, { useState, useEffect, useRef } from 'react';

const ImageLoader = ({ src, placeholder, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imageRef = useRef(null);

  const onLoad = () => {
    setImageSrc(src);
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef.current && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          //callback funtion when image cones in viewport
          entries => {
            entries.forEach(entry => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                observer.unobserve(imageRef.current);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%'
          }
        );
        observer.observe(imageRef.current);
      } else {
        //fallback for old browsers
        onLoad();
      }
    }
    return () => {
      didCancel = true;

      if (observer && observer.unobserve) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src, imageSrc]);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      className='h-auto mb-8 w-full'
      onLoad={onLoad}
    />
  );
};

export default ImageLoader;
