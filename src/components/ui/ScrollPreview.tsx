import { useEffect, useRef, useState } from 'react';

export function ScrollPreview({ src, title, detail }: { src: string; title: string; detail: string }) {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    let visible = false;
    const update = () => setPlaying(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    if (ref.current) observer.observe(ref.current);
    document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); };
  }, []);
  return <figure ref={ref} className="border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden">
    <div className={`browser-preview portal-scroll-preview ${playing ? 'preview-playing' : ''}`}>
      <div className="browser-toolbar" aria-hidden="true"><span/><span/><span/><div>Zenda · portal público</div></div>
      <div className="browser-viewport relative overflow-hidden">
        {!ready && <span className="image-skeleton absolute inset-0" aria-label="Cargando recorrido"/>}
        <img src={src} alt={title} loading="lazy" decoding="async" onLoad={event => { const image = event.currentTarget; image.decode().then(() => setReady(true)).catch(() => {}); }} className={`browser-scroll-image portal-scroll-image ${ready ? 'portal-image-ready' : ''}`} />
      </div>
    </div>
    <figcaption className="p-5"><strong className="block">{title}</strong><span className="text-sm text-[var(--text-muted)]">{detail}</span></figcaption>
  </figure>;
}
