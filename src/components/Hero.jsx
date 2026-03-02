import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import gmcWood from '../assets/gmc-wood.png'

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero" id="home">
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">
                        {t('hero.title')} <br />
                        <span className="text-gradient">{t('nav.gmc')}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">{t('hero.cta_contact')}</a>
                        <a href="#features" className="btn btn-secondary">{t('hero.cta_explore')}</a>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-image-placeholder">
                        <img src={gmcWood} alt="GMC-001 MIDI Controller Wood Edition" className="hero-image" />
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
