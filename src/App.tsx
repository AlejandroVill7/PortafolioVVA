
import { SmoothScroll } from './components/layout/SmoothScroll';
import { ScanEffect } from './components/layout/ScanEffect';
import { Hero } from './components/sections/Hero';
import { AboutBento } from './components/sections/AboutBento';
import { Projects } from './components/sections/Projects';
import { CyberSec } from './components/sections/CyberSec';

function App() {
  return (
    <SmoothScroll>
      <ScanEffect />
      <main className="w-full min-h-screen relative z-10 flex flex-col items-center">
        <Hero />
        <AboutBento />
        <CyberSec />
        <Projects />
      </main>
    </SmoothScroll>
  );
}

export default App;
