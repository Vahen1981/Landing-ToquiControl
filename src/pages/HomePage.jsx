import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';
import gmcWood from '../assets/gmc-wood.png';
// Using the same image variable temporarily for SuperFoot, 
// wait, since superfoot shouldn't have an image, I will use a blank div there.

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div className="app-wrapper theme-neutral animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header showNavLinks={false} onOpenApp={() => {
        window.open(`${import.meta.env.BASE_URL}app/index.html`, '_blank');
      }} />
      
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container" style={{ width: '100%' }}>
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <h1 className="section-title" style={{ fontSize: '3.5rem' }}>{t('homeBrand.title')}</h1>
                <p className="section-subtitle" style={{ fontSize: '1.8rem' }}>{t('homeBrand.subtitle')}</p>
            </div>

            <div className="home-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                {/* GMC-001 Card */}
                <Link to="/gmc-001" className="brand-card">
                    <div className="brand-card-image">
                         <img src={gmcWood} alt="GMC-001" style={{ width: '80%', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
                    </div>
                    <div className="brand-card-content">
                        <h2>{t('homeBrand.gmc_card_title')}</h2>
                        <p>{t('homeBrand.gmc_card_desc')}</p>
                        <span className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>{t('homeBrand.btn')}</span>
                    </div>
                </Link>

                {/* SuperFoot MIDI Card */}
                <Link to="/superfoot-midi" className="brand-card sf-card">
                    <div className="brand-card-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '240px' }}>
                         <div style={{ width: '180px', height: '120px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '2px dashed rgba(255,255,255,0.1)' }}></div>
                    </div>
                    <div className="brand-card-content">
                        <h2>{t('homeBrand.sf_card_title')}</h2>
                        <p>{t('homeBrand.sf_card_desc')}</p>
                        <span className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>{t('homeBrand.btn')}</span>
                    </div>
                </Link>
            </div>
        </div>
      </main>

      <Footer onOpenApp={() => window.open(`${import.meta.env.BASE_URL}app/index.html`, '_blank')} />
    </div>
  );
};

export default HomePage;
