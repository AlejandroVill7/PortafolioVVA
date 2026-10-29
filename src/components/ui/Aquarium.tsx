import { useEffect, useRef, useState } from 'react';

export function Aquarium() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`aquarium ${active ? '' : 'aquarium-paused'}`} aria-hidden="true">
    <div className="aquarium-light" />
    {[0, 1, 2, 3, 4].map(i => <div key={i} className={`aquarium-fish fish-${i}`}><svg viewBox="0 0 80 40" fill="none"><path d="M54 20 77 5v30L54 20Z" fill="#d5a826"/><ellipse cx="32" cy="20" rx="27" ry="14" fill="#edca49"/><path d="m26 7 17-6-5 10M26 31l14 8-3-11" fill="#bd9425"/><circle cx="15" cy="17" r="2" fill="#3a4526"/><path d="M45 13q-9 7 0 14" stroke="#c49c29" strokeWidth="2"/></svg></div>)}
    <div className="aquarium-floor">{[0, 1, 2, 3, 4, 5].map(i => <span key={i} className={`sea-plant plant-${i}`} />)}<i className="sea-rock rock-one"/><i className="sea-rock rock-two"/></div>
  </div>;
}
