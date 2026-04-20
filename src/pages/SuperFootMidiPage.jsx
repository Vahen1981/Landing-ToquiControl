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
import logo from '../assets/logo-superfoot.png';
import sfCapture from '../assets/app-capture-superfoot.png';


const SuperFootMidiPage = () => {
  const handleOpenApp = () => {
    window.open(`${import.meta.env.BASE_URL}app-sf/index.html`, '_blank');
  };

  return (
    <>
      <Header onOpenApp={handleOpenApp} showNavLinks={true} />
      <div className="app-wrapper animate-fade-in theme-superfoot">
        <main>
          <Hero emptyMedia={true} customLogo={logo}/>
          <Features />
          <Gallery emptyMedia={true} />
          <AppPromo onOpenApp={handleOpenApp} customImage={sfCapture} urlPath="toquicontrol.cl/app-sf" />
          <VideoSection emptyMedia={true} />
        </main>
        <Footer onOpenApp={handleOpenApp} />
      </div>
    </>
  );
};

export default SuperFootMidiPage;
