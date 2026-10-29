import { useEffect, useRef, useState } from 'react';
import { technologyIcons } from '../../profile';

export function TechCloud() {
  const ref = useRef<HTMLDivElement>(null);
  const [active,setActive] = useState(false);
  useEffect(()=>{let visible=false;const update=()=>setActive(visible&&!document.hidden);const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update()});if(ref.current)observer.observe(ref.current);document.addEventListener('visibilitychange',update);return()=>{observer.disconnect();document.removeEventListener('visibilitychange',update)}},[]);
  return <div ref={ref} className={`tech-cloud ${active?'':'cloud-paused'}`} role="img" aria-label={technologyIcons.map(([,label]) => label).join(", ")}><div className="cloud-orbit"/>{technologyIcons.map(([name,label],i)=>{const angle=i*2.39996;const radius=45+Math.sqrt(i/technologyIcons.length)*100;return <img key={name} src={`/technologies/${name}.svg`} alt="" title={label} loading="lazy" width="42" height="42" style={{left:`calc(50% + ${Math.cos(angle)*radius}px)`,top:`calc(50% + ${Math.sin(angle)*radius}px)`,animationDelay:`-${i*1.7}s`,animationDuration:`${18+i%4*3}s`}}/>})}</div>;
}
