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
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

const DeviceWarning = ({ onClose }) => {
  const { t } = useLanguage();
  return (
    <div className="device-warning-overlay">
      <div className="device-warning-card animate-scale-in">
        <button className="close-warning" onClick={onClose}><X size={24} /></button>
        <div className="warning-icon">
          <Monitor size={48} />
        </div>
        <h2>{t('warning.title')}</h2>
        <p>
          {t('warning.p1').split('GMC-001').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && <strong>GMC-001</strong>}
            </React.Fragment>
          ))}
        </p>
        <p className="warning-note">
          {t('warning.p2')}
        </p>
        <button className="btn btn-primary" onClick={onClose}>{t('warning.btn')}</button>
      </div>
    </div>
  );
};

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
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
