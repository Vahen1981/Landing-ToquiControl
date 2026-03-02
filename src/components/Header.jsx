import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Header = ({ onOpenApp }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAppClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        onOpenApp();
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src="/logo.png" alt="ToquiControl Logo" />
                </a>

                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gmc')}</a>
                    <a href="#app-promo" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.app')}</a>
                    <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gallery')}</a>
                    <a href="#video" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.videos')}</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</a>

                    <div className="lang-switcher-mobile">
                        <button onClick={toggleLanguage} className="lang-btn">
                            <Globe size={20} />
                            <span>{language === 'es' ? 'EN' : 'ES'}</span>
                        </button>
                    </div>

                    <div className="social-links-mobile">
                        <a href="https://instagram.com/toquicontrol" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="https://facebook.com/toquicontrol" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
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
                        <a href="https://facebook.com/toquicontrol" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                        <a href="https://wa.me/56988170598" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
