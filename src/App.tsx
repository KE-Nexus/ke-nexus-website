import { ThemeProvider } from './theme/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Cover } from './components/sections/Cover';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Portfolio } from './components/sections/Portfolio';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { Stats } from './components/sections/Stats';
import { CtaBanner } from './components/sections/CtaBanner';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Cover />
        <Hero />
        <TrustBar />
        <About />
        <Pricing />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Stats />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
