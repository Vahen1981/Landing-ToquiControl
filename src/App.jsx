import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import AppSection from './components/AppSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <AppSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
