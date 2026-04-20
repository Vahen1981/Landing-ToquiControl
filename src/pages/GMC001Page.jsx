import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import AppPromo from '../components/AppPromo';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';
import { Monitor, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/components/DeviceWarning.css';

const DeviceWarning = ({ onClose }) => {
  const { t } = useLanguage();
  return (
    <div className="device-warning-overlay">
      <div className="device-warning-card animate-scale-in">
        <button className="close-warning" onClick={onClose}>
          <X size={24} />
        </button>
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
        <button className="btn btn-primary" onClick={onClose}>
          {t('warning.btn')}
        </button>
      </div>
    </div>
  );
};

const GMC001Page = () => {
  const [showWarning, setShowWarning] = useState(false);

  const isDesktop = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /iphone|ipad|ipod|android|blackberry|mini|windows\sphone|palm|mobile/i.test(
        userAgent
      );
    return !isMobile;
  };

  const handleOpenApp = () => {
    if (isDesktop()) {
      window.open(`${import.meta.env.BASE_URL}gmc-app/index.html`, '_blank');
    } else {
      setShowWarning(true);
    }
  };

  return (
    <>
      <Header onOpenApp={handleOpenApp} showNavLinks={true} />
      <div className="app-wrapper animate-fade-in">
        <main>
          <Hero />
          <Features />
          <Gallery />
          <AppPromo onOpenApp={handleOpenApp} />
          <VideoSection />
        </main>
        <Footer onOpenApp={handleOpenApp} />
        {showWarning && (
          <DeviceWarning onClose={() => setShowWarning(false)} />
        )}
      </div>
    </>
  );
};

export default GMC001Page;
