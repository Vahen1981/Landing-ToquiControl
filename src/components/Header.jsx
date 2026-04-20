import React, { useState, useEffect } from 'react';
import { Menu, Instagram, Facebook, MessageCircle, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/toqui-icon.png';
import '../styles/components/Header.css';

const Header = ({ onOpenApp, showNavLinks = true, customLogo }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductSubmenuOpen, setIsProductSubmenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAppClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        onOpenApp();
    };

    const handleLogoClick = (e) => {
        if (window.innerWidth <= 768) {
            // If the menu is closed, we open it and prevent navigation
            if (!isMobileMenuOpen) {
                e.preventDefault();
                setIsMobileMenuOpen(true);
            } else {
                // If the menu is open and we click the logo again, we close it
                // but let the Link handle the navigation to "/"
                setIsMobileMenuOpen(false);
            }
        } else {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`header theme-neutral ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo-wrapper">
                    <Link to="/" className="logo-btn" onClick={handleLogoClick}>
                        <img src={customLogo || logo} alt="Brand Logo" className="logo-img" />
                    </Link>
                </div>

                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
                    
                    <div className={`products-nav-item mobile-only ${isProductSubmenuOpen ? 'mobile-open' : ''}`}>
                        <div className="dropdown-trigger" onClick={() => setIsProductSubmenuOpen(!isProductSubmenuOpen)}>
                            {t('nav.products')} <ChevronDown size={16} />
                        </div>
                        <div className="dropdown-menu">
                            <div className="dropdown-group">
                                <Link to="/gmc-001" className="dropdown-group-title" onClick={() => setIsMobileMenuOpen(false)}>
                                    {t('nav.gmc_name')}
                                </Link>
                                <div className="dropdown-sub-items">
                                    <Link to="/gmc-001#home" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
                                    <Link to="/gmc-001#features" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gmc')}</Link>
                                    <Link to="/gmc-001#gallery" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gallery')}</Link>
                                    <Link to="/gmc-001#app-promo" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.app')}</Link>
                                    <Link to="/gmc-001#video" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.videos')}</Link>
                                </div>
                            </div>
                            <div className="dropdown-group">
                                <Link to="/superfoot-midi" className="dropdown-group-title" onClick={() => setIsMobileMenuOpen(false)}>
                                    {t('nav.sf_name')}
                                </Link>
                                <div className="dropdown-sub-items">
                                    <Link to="/superfoot-midi#home" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
                                    <Link to="/superfoot-midi#features" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gmc')}</Link>
                                    <Link to="/superfoot-midi#gallery" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gallery')}</Link>
                                    <Link to="/superfoot-midi#app-promo" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.app')}</Link>
                                    <Link to="/superfoot-midi#video" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.videos')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Products Nav Item integrated into main nav group */}
                    <div className={`products-nav-item desktop-only`}>
                        <div className="dropdown-trigger">
                            {t('nav.products')} <ChevronDown size={16} />
                        </div>
                        <div className="dropdown-menu">
                            <div className="dropdown-group">
                                <Link to="/gmc-001" className="dropdown-group-title">{t('nav.gmc_name')}</Link>
                                <div className="dropdown-sub-items">
                                    <Link to="/gmc-001#home">{t('nav.home')}</Link>
                                    <Link to="/gmc-001#features">{t('nav.gmc')}</Link>
                                    <Link to="/gmc-001#gallery">{t('nav.gallery')}</Link>
                                    <Link to="/gmc-001#app-promo">{t('nav.app')}</Link>
                                    <Link to="/gmc-001#video">{t('nav.videos')}</Link>
                                </div>
                            </div>
                            <div className="dropdown-group">
                                <Link to="/superfoot-midi" className="dropdown-group-title">{t('nav.sf_name')}</Link>
                                <div className="dropdown-sub-items">
                                    <Link to="/superfoot-midi#home">{t('nav.home')}</Link>
                                    <Link to="/superfoot-midi#features">{t('nav.gmc')}</Link>
                                    <Link to="/superfoot-midi#gallery">{t('nav.gallery')}</Link>
                                    <Link to="/superfoot-midi#app-promo">{t('nav.app')}</Link>
                                    <Link to="/superfoot-midi#video">{t('nav.videos')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</Link>

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
