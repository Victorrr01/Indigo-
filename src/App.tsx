import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingChatbot from './components/FloatingChatbot';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen bg-indigo-950 font-sans selection:bg-gold-500/30 selection:text-gold-200">
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <AIConsultant />
          <Footer />
          
          <FloatingWhatsApp />
          <FloatingChatbot />
        </main>
      )}
    </>
  );
}
