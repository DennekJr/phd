import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import UpcomingEvents from './components/UpcomingEvents';
import JoinNetwork from './components/JoinNetwork';
import Graphic from './components/Graphic';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <JoinNetwork />
      <Graphic />
      <WhatWeDo />
      <UpcomingEvents showAllEvents={false} />
    </main>
  );
}
