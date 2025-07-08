import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import JoinNetwork from './components/JoinNetwork';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      {/* <JoinNetwork /> */}
    </main>
  );
}
