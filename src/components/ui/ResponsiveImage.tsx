import { useState } from 'react';
import clsx from 'clsx';
import { unsplashUrl, unsplashSrcSet } from '../../data/images';

const DEFAULT_WIDTHS = [400, 800, 1200, 1600];

interface ResponsiveImageProps {
  photoId: string;
  alt: string;
  sizes?: string;
  className?: string;
  widths?: number[];
  priority?: boolean;
}

/** Lazy-loaded, responsive Unsplash image with a fade-in transition once decoded. */
export function ResponsiveImage({
  photoId,
  alt,
  sizes = '100vw',
  className,
  widths = DEFAULT_WIDTHS,
  priority = false,
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={unsplashUrl(photoId, { width: widths[1] })}
      srcSet={unsplashSrcSet(photoId, widths)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={clsx(
        'transition-all duration-700 ease-out',
        loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md',
        className,
      )}
    />
  );
}
