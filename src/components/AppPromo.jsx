import React from 'react';
import { ExternalLink, Cpu } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/components/AppPromo.css';
import appCapture from '../assets/app-capture.png';

const AppPromo = ({ onOpenApp, customImage, urlPath = 'toquicontrol.cl/gmc-app' }) => {
    const { t } = useLanguage();

    return (
        <section id="app-promo" className="app-promo-section">
            <div className="container">
                <div className="app-promo-card animate-fade-in">
                    <div className="app-promo-content">
                        <div className="promo-badge">
                            <Cpu size={16} />
                            <span>{t('app_promo.badge')}</span>
                        </div>
                        <h2 className="section-title">{t('app_promo.title')} <span className="text-gradient">{t('app_promo.title_accent')}</span></h2>
                        <p className="promo-text">
                            {t('app_promo.text')}
                        </p>
                        <div className="promo-features">
                            <div className="promo-feature">
                                <span className="feature-dot"></span>
                                <span>{t('app_promo.feat_visual')}</span>
                            </div>
                            <div className="promo-feature">
                                <span className="feature-dot"></span>
                                <span>{t('app_promo.feat_sync')}</span>
                            </div>
                            <div className="promo-feature">
                                <span className="feature-dot"></span>
                                <span>{t('app_promo.feat_zero')}</span>
                            </div>
                        </div>
                        <button onClick={onOpenApp} className="btn btn-primary btn-large">
                            {t('app_promo.btn')} <ExternalLink size={20} style={{ marginLeft: '10px' }} />
                        </button>
                    </div>
                    <div className="app-promo-image" onClick={onOpenApp}>
                        <div className="image-browser-mockup">
                            <div className="browser-header">
                                <div className="browser-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="browser-bar">{urlPath}</div>
                            </div>
                            <img src={customImage || appCapture} alt="ToquiControl Web App Interface" />
                            <div className="image-overlay">
                                <div className="play-button">
                                    <ExternalLink size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPromo;
