import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/components/Gallery.css';
import img1 from '../assets/GMC-001/01.png';
import img2 from '../assets/GMC-001/02.png';
import img3 from '../assets/GMC-001/03.png';
import img4 from '../assets/GMC-001/04.png';

const Gallery = ({ emptyMedia = false, customImages = null }) => {
    const { t } = useLanguage();

    const defaultImages = [
        { src: img1, alt: t('gallery.alt_1') },
        { src: img2, alt: t('gallery.alt_2') },
        { src: img3, alt: t('gallery.alt_3') },
        { src: img4, alt: t('gallery.alt_4') }
    ];

    const images = customImages || defaultImages;

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
                                {!emptyMedia ? (
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)' }}></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
