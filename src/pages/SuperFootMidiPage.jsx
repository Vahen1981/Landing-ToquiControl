import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import AppPromo from '../components/AppPromo';
import ManualPromo from '../components/ManualPromo';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';
import { Monitor, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/logo-superfoot.png';
import sfCapture from '../assets/app-capture-superfoot.png';
import sfRender from '../assets/superfoot/04.png';
import sf1 from '../assets/superfoot/01.png';
import sf2 from '../assets/superfoot/02.png';
import sf3 from '../assets/superfoot/03.png';
import sf4 from '../assets/superfoot/04.png';

const SuperFootMidiPage = () => {
  const { t } = useLanguage();
  
  const handleOpenApp = () => {
    window.open(`${import.meta.env.BASE_URL}superfoot-app/index.html`, '_blank');
  };

  const sfImages = [
    { src: sf1, alt: t('gallery.alt_1') },
    { src: sf2, alt: t('gallery.alt_2') },
    { src: sf3, alt: t('gallery.alt_3') },
    { src: sf4, alt: t('gallery.alt_4') }
  ];

  return (
    <>
      <Header onOpenApp={handleOpenApp} showNavLinks={true} />
      <div className="app-wrapper animate-fade-in theme-superfoot">
        <main>
          <Hero customLogo={logo} customImage={sfRender} />
          <Features />
          <Gallery customImages={sfImages} />
          <AppPromo onOpenApp={handleOpenApp} customImage={sfCapture} urlPath="toquicontrol.cl/superfoot-app" />
          <ManualPromo customImage={sfRender} />
          {/* <VideoSection /> */}
        </main>
        <Footer onOpenApp={handleOpenApp} />
      </div>
    </>
  );
};

export default SuperFootMidiPage;
