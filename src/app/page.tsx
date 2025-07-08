import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import JoinNetwork from './components/JoinNetwork';
import Graphic from './components/Graphic';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <JoinNetwork />
      <Graphic />
      <WhatWeDo />
    </main>
  );
}
