import React from 'react';
import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = ({ onOpenApp }) => {
    const { t } = useLanguage();
    const handleAppClick = (e) => {
        e.preventDefault();
        onOpenApp();
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src="/logo.png" alt="ToquiControl Logo" />
                        </a>
                        <p className="footer-desc">{t('footer.desc')}</p>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-heading">{t('footer.follow')}</h4>
                        <div className="social-icons">
                            <a href="https://instagram.com/toquicontrol" className="social-link" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                            <a href="https://facebook.com/toquicontrol" className="social-link" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                            <a href="https://wa.me/56988170598" className="social-link" target="_blank" rel="noopener noreferrer"><MessageCircle size={24} /></a>
                            <a href="mailto:hola@toquicontrol.cl" className="social-link"><Mail size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ToquiControl. {t('footer.rights')}</p>
                    <p className="footer-made-in">{t('footer.made_in')} 🇨🇱</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
