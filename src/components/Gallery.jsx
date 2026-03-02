import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();

    const images = [
        { src: '/01.png', alt: t('gallery.alt_1') },
        { src: '/02.png', alt: t('gallery.alt_2') },
        { src: '/03.png', alt: t('gallery.alt_3') },
        { src: '/04.png', alt: t('gallery.alt_4') }
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('gallery.title')} <span className="text-gradient">{t('gallery.title_accent')}</span></h2>
                    <p className="section-subtitle">
                        {t('gallery.subtitle')}
                    </p>
                </div>
                
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="gallery-image-wrapper">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
