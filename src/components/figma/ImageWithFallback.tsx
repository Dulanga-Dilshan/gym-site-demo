import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({ src, fallbackSrc, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const onError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      onError={onError}
      {...props}
    />
  );
}