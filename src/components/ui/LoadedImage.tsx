import { useState, type ImgHTMLAttributes } from 'react';

export function LoadedImage({ className = '', alt, onLoad, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [ready, setReady] = useState(false);
  return <span className={`image-shell ${className} ${ready ? 'image-ready' : 'image-loading'}`}>
    <img {...props} alt={alt} decoding="async" onLoad={async event => {
      const image = event.currentTarget;
      try { await image.decode(); } catch { /* Loaded images can already be decoded. */ }
      setReady(true);
      onLoad?.(event);
    }} style={{ width: '100%', height: '100%', objectFit: 'inherit', objectPosition: 'inherit', opacity: ready ? 1 : 0 }} />
  </span>;
}
