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
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className={`aquarium-fish fish-${i}`}><svg viewBox="0 0 80 40" fill="none"><path d="M54 20 77 5v30L54 20Z" fill="#d5a826"/><ellipse cx="32" cy="20" rx="27" ry="14" fill="#edca49"/><path d="m26 7 17-6-5 10M26 31l14 8-3-11" fill="#bd9425"/><path d="M10 23q23 13 45-3" stroke="#fff0a0" strokeWidth="2" opacity=".6"/><path d="m58 19 15-9m-14 12 14 8M27 11q-8 9 0 18" stroke="#9e7d22" strokeWidth="1" opacity=".5"/><path d="m32 18 10 7-13 2" fill="#e5af30"/><circle cx="15" cy="17" r="3" fill="#fff1b0"/><circle cx="14" cy="17" r="1.7" fill="#28392c"/><circle cx="13.5" cy="16.5" r=".6" fill="white"/><path d="M45 13q-9 7 0 14" stroke="#c49c29" strokeWidth="2"/></svg></div>)}
    <svg className="aquarium-shore" viewBox="0 0 1440 160" preserveAspectRatio="none"><path d="M0 72Q180 8 360 70T720 68T1080 65T1440 64V160H0Z" fill="var(--bg-base)"/><path d="M0 65Q180 1 360 63T720 61T1080 58T1440 57" stroke="#e9ead3" strokeWidth="8" opacity=".35" fill="none"/><path d="M0 50Q180 0 360 48T720 48T1080 44T1440 45" stroke="#d8dfc2" strokeWidth="2" opacity=".3" fill="none"/></svg>
    <div className="aquarium-floor">{[0, 1, 2, 3, 4, 5].map(i => <span key={i} className={`sea-plant plant-${i}`} />)}<i className="sea-rock rock-one"/><i className="sea-rock rock-two"/></div>
  </div>;
}
