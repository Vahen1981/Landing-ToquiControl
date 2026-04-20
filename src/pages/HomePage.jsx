import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';
import { useLanguage } from '../i18n/LanguageContext';
import logoMarca from '../assets/logo-marca.png';
import Contact from '../components/Contact';
import '../styles/pages/HomePage.css';
// Using the same image variable temporarily for SuperFoot, 
// wait, since superfoot shouldn't have an image, I will use a blank div there.

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header showNavLinks={true} onOpenApp={() => {
        window.open(`${import.meta.env.BASE_URL}gmc-app/index.html`, '_blank');
      }} />
      
      <div className="app-wrapper theme-neutral animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1, paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container" style={{ width: '100%', marginBottom: '4rem' }}>
          <div className="home-brand-hero" id="home">
            <div className="hero-brand-logo">
                <img src={logoMarca} alt="ToquiControl Logo" className="brand-logo-img" />
            </div>
            <div className="hero-brand-text">
                {/* <h1 className="section-title">{t('homeBrand.title')}</h1> */}
                <p className="section-subtitle">{t('homeBrand.subtitle')}</p>
            </div>
          </div>
        </div>

        <ProductSlider />
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer onOpenApp={() => window.open(`${import.meta.env.BASE_URL}gmc-app/index.html`, '_blank')} />
    </div>
    </>
  );
};

export default HomePage;
