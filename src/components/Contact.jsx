import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-card animate-fade-in">
                    <div className="contact-header">
                        <h2 className="section-title">{t('contact.title')} <span className="text-gradient">{t('contact.title_accent')}</span></h2>
                        <p className="contact-subtitle">
                            {t('contact.subtitle')}
                        </p>
                    </div>
                    
                    <div className="contact-main">
                        <a href="https://wa.me/56988170598" target="_blank" rel="noopener noreferrer" className="whatsapp-cta-large">
                            <div className="whatsapp-icon-wrapper">
                                <MessageCircle size={48} />
                                <span className="status-dot"></span>
                            </div>
                            <div className="whatsapp-text">
                                <span className="whatsapp-label">{t('contact.whatsapp_label')}</span>
                                <span className="whatsapp-number">+56 9 8817 0598</span>
                            </div>
                            <div className="whatsapp-arrow">→</div>
                        </a>
                    </div>

                    <div className="contact-footer">
                        <p>{t('contact.attention')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
