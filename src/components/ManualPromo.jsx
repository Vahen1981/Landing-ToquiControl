import React from 'react';
import { Download, FileText, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/components/AppPromo.css';
import manualPdf from '../downloads/SuperFootMIDI_Manual.pdf';

const ManualPromo = ({ customImage }) => {
    const { t } = useLanguage();

    const handleViewOnline = () => {
        window.open(manualPdf, '_blank');
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = manualPdf;
        link.download = 'SuperFootMIDI_Manual.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="manual-promo" className="app-promo-section">
            <div className="container">
                <div className="app-promo-card animate-fade-in">
                    <div className="app-promo-content">
                        <div className="promo-badge">
                            <BookOpen size={16} />
                            <span>{t('manual.badge')}</span>
                        </div>
                        <h2 className="section-title">{t('manual.title')} <span className="text-gradient">{t('manual.title_accent')}</span></h2>
                        <p className="promo-text">
                            {t('manual.text')}
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                            <button onClick={handleViewOnline} className="btn btn-primary btn-large">
                                {t('manual.btn_view')} <FileText size={20} style={{ marginLeft: '10px' }} />
                            </button>
                            <button onClick={handleDownload} className="btn btn-outline btn-large" style={{ 
                                padding: '1.2rem 2.5rem',
                                fontSize: '1.2rem',
                                border: '1px solid var(--accent-primary)',
                                color: 'var(--text-main)',
                                background: 'transparent',
                                borderRadius: '100px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}>
                                {t('manual.btn_download')} <Download size={20} style={{ marginLeft: '10px' }} />
                            </button>
                        </div>
                    </div>
                    <div className="app-promo-image" onClick={handleViewOnline}>
                        <div className="image-browser-mockup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-darker)', height: '100%', minHeight: '300px' }}>
                            <div className="browser-header" style={{ position: 'absolute', top: 0, width: '100%' }}>
                                <div className="browser-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="browser-bar">SuperFootMIDI_Manual.pdf</div>
                            </div>
                            {customImage ? (
                                <img src={customImage} alt="Manual" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                            ) : (
                                <FileText size={120} color="var(--accent-primary)" style={{ opacity: 0.7 }} />
                            )}
                            <div className="image-overlay">
                                <div className="play-button">
                                    <FileText size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManualPromo;
