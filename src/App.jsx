import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showApp, setShowApp] = useState(false);

  // Listen for message from iframe (from the back button we'll add)
  React.useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'backToLanding') {
        setShowApp(false);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (showApp) {
    return (
      <div className="app-view-container" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <iframe 
          src="/app/index.html" 
          title="GMC-001 Web App" 
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <Header onOpenApp={() => setShowApp(true)} />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <VideoSection />
        <Contact />
      </main>
      <Footer onOpenApp={() => setShowApp(true)} />
    </div>
  );
}

export default App;
