import React from 'react';

const Gallery = () => {
    const images = [
        { src: '/01.png', alt: 'ToquiControl GMC-001 - Vista Frontal' },
        { src: '/02.png', alt: 'ToquiControl GMC-001 - Detalle de Madera' },
        { src: '/03.png', alt: 'ToquiControl GMC-001 - En Acción' },
        { src: '/04.png', alt: 'ToquiControl GMC-001 - Conectividad' }
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Galería de <span className="text-gradient">Fotos</span></h2>
                    <p className="section-subtitle">
                        Descubre los detalles y la calidad artesanal detrás de cada GMC-001.
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
