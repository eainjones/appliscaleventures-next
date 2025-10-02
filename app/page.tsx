import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Commitment from '@/components/Commitment';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Commitment />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
