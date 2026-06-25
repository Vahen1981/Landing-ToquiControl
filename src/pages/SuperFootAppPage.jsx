import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoSection from '../components/SuperFoot/VideoSection';

const SuperFootAppPage = () => {
  const [showWarning] = useState(false);

  const handleOpenApp = () => {
    window.open(`${import.meta.env.BASE_URL}superfoot-app/index.html`, '_blank');
  };

  return (
    <>
      <Header onOpenApp={handleOpenApp} showNavLinks={true} />
      <div className="app-wrapper animate-fade-in">
        <main>
          <VideoSection />
        </main>
        <Footer onOpenApp={handleOpenApp} />
      </div>
      {showWarning && null}
    </>
  );
};

export default SuperFootAppPage;
