import React, { useState, useEffect } from 'react';
import { Menu, Instagram, Facebook, MessageCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/toqui-icon.png';

const Header = ({ onOpenApp, showNavLinks = true, customLogo }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    const handleAppClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        onOpenApp();
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-wrapper">
                    <Link to="/" className="logo-btn" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src={customLogo || logo} alt="Brand Logo" className="logo-img" />
                    </Link>
                </div>

                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    {showNavLinks && (
                        <>
                            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</a>
                            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gmc')}</a>
                            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gallery')}</a>
                            <a href="#app-promo" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.app')}</a>
                            <a href="#video" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.videos')}</a>
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</a>
                        </>
                    )}

                    <div className="lang-switcher-mobile">
                        <button onClick={toggleLanguage} className="lang-btn">
                            <Globe size={20} />
                            <span>{language === 'es' ? 'EN' : 'ES'}</span>
                        </button>
                    </div>

                    <div className="social-links-mobile">
                        <a href="https://instagram.com/toquicontrol" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/profile.php?id=100087980108747&locale=es_LA" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                        <a href="https://wa.me/56988170598" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
                    </div>
                </nav>

                <div className="header-actions">
                    <div className="lang-switcher">
                        <button onClick={toggleLanguage} className="lang-btn" title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}>
                            <Globe size={18} />
                            <span>{language === 'es' ? 'EN' : 'ES'}</span>
                        </button>
                    </div>

                    <div className="social-links">
                        <a href="https://instagram.com/toquicontrol" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/profile.php?id=100087980108747&locale=es_LA" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                        <a href="https://wa.me/56988170598" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
