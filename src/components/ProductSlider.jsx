import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import gmcWood from '../assets/gmc-2.png';
import sfRender from '../assets/superfoot-midi-render.png';
import { ArrowRight } from 'lucide-react';
import '../styles/components/ProductSlider.css';

const ProductSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { t } = useLanguage();

    const products = [
        {
            id: 'gmc',
            title: t('homeBrand.gmc_card_title'),
            desc: t('homeBrand.gmc_card_desc'),
            image: gmcWood,
            link: '/gmc-001',
            theme: 'theme-neutral'
        },
        {
            id: 'sf',
            title: t('homeBrand.sf_card_title'),
            desc: t('homeBrand.sf_card_desc'),
            image: sfRender,
            link: '/superfoot-midi',
            theme: 'theme-superfoot'
        }
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [products.length, isPaused]);

    return (
        <div 
            className="product-slider-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div 
                className="product-slider-track" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {products.map((product, index) => (
                    <div 
                        key={product.id} 
                        className={`product-slide ${index === currentIndex ? 'active' : ''} ${product.theme}`}
                    >
                        <div className="slider-inner-content">
                            <div className="slide-content">
                                <h2 className="slide-title">{product.title}</h2>
                                <p className="slide-desc">{product.desc}</p>
                                <Link to={product.link} className="btn btn-primary">
                                    {t('homeBrand.btn')} <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                                </Link>
                            </div>
                            <div className="slide-image-wrapper">
                                <img src={product.image} alt={product.title} className="slide-img" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-dots">
                {products.map((_, index) => (
                    <div 
                        key={index} 
                        className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductSlider;
