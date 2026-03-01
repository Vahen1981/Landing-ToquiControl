import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import AppPromo from './components/AppPromo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Monitor, X } from 'lucide-react';

const DeviceWarning = ({ onClose }) => (
  <div className="device-warning-overlay">
    <div className="device-warning-card animate-scale-in">
      <button className="close-warning" onClick={onClose}><X size={24} /></button>
      <div className="warning-icon">
        <Monitor size={48} />
      </div>
      <h2>Acceso Restringido</h2>
      <p>
        La aplicación de programación <strong>GMC-001</strong> requiere una conexión USB-MIDI 
        que solo es compatible con navegadores de escritorio en <strong>PC o Mac</strong>.
      </p>
      <p className="warning-note">
        Por favor, vuelve a visitarnos desde tu computadora para configurar tu dispositivo.
      </p>
      <button className="btn btn-primary" onClick={onClose}>Entendido</button>
    </div>
  </div>
);

function App() {
  const [showApp, setShowApp] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const isDesktop = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sphone|palm|mobile/i.test(userAgent);
    return !isMobile;
  };

  const handleOpenApp = () => {
    if (isDesktop()) {
      setShowApp(true);
    } else {
      setShowWarning(true);
    }
  };

  // Listen for message from iframe (from the back button we'll add)
  useEffect(() => {
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
      <Header onOpenApp={handleOpenApp} />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <AppPromo onOpenApp={handleOpenApp} />
        <VideoSection />
        <Contact />
      </main>
      <Footer onOpenApp={handleOpenApp} />
      {showWarning && <DeviceWarning onClose={() => setShowWarning(false)} />}
    </div>
  );
}

export default App;
