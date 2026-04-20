import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import gmcWood from '../assets/gmc-wood.png'
import logo from '../assets/logo2.png';
import '../styles/components/Hero.css';

const Hero = ({ tKey = 'hero', emptyMedia = false, customLogo }) => {
    const { t } = useLanguage();

    return (
        <section className="hero" id="home">
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container hero-container">
                <div className="hero-text-side animate-fade-in">
                    <div className="hero-logo-wrapper">
                        <img src={customLogo || logo} alt="Product Logo" className="hero-logo" />
                    </div>

                    <div className="hero-content">
                        <p className="hero-subtitle">
                            {t(`${tKey}.subtitle`)}
                        </p>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-image-placeholder">
                        {!emptyMedia ? (
                            <img src={gmcWood} alt="GMC-001 MIDI Controller Wood Edition" className="hero-image" />
                        ) : (
                            <div className="hero-image" style={{ background: 'rgba(0,0,0,0.2)', width: '100%', aspectRatio: '1/1' }}></div>
                        )}
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
