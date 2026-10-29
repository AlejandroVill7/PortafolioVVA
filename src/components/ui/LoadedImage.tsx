import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import imageSizes from '../../imageSizes.json';

export function LoadedImage({ className = '', alt, src, width, height, loading = 'lazy', onLoad, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [readySrc, setReadySrc] = useState<string>();
  const [failedSrc, setFailedSrc] = useState<string>();
  const dimensions = (imageSizes as Record<string, number[]>)[String(src)];
  const ready = readySrc === src;
  const failed = failedSrc === src;
  useEffect(() => {
    let cancelled = false;
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth) {
      image.decode().then(() => { if (!cancelled) setReadySrc(src); }).catch(() => {});
    }
    return () => { cancelled = true; };
  }, [src]);
  return <span className={`image-shell ${className} ${ready ? 'image-ready' : 'image-loading'}`} style={{ aspectRatio: dimensions ? `${dimensions[0]} / ${dimensions[1]}` : undefined }}>
    <img {...props} ref={imageRef} src={src} width={width ?? dimensions?.[0]} height={height ?? dimensions?.[1]} alt={alt} loading={loading} decoding="async" onError={() => setFailedSrc(src)} onLoad={event => {
      const image = event.currentTarget;
      image.decode().then(() => { if (imageRef.current === image) setReadySrc(src); }).catch(() => setFailedSrc(src));
      onLoad?.(event);
    }} style={{ width: '100%', height: '100%', objectFit: 'inherit', objectPosition: 'inherit', opacity: ready ? 1 : 0 }} />
    {failed && <span className="image-fallback">{alt || 'Imagen no disponible'}</span>}
  </span>;
}
