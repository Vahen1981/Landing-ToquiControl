import React from 'react';
import { Settings, Zap, Repeat, Shield, Sliders, Smartphone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/components/Features.css';

const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Settings className="text-primary" size={32} />,
            title: t('features.f1_title'),
            desc: t('features.f1_desc')
        },
        {
            icon: <Zap className="text-secondary" size={32} />,
            title: t('features.f2_title'),
            desc: t('features.f2_desc')
        },
        {
            icon: <Repeat className="text-primary" size={32} />,
            title: t('features.f3_title'),
            desc: t('features.f3_desc')
        },
        {
            icon: <Shield className="text-secondary" size={32} />,
            title: t('features.f4_title'),
            desc: t('features.f4_desc')
        },
        {
            icon: <Sliders className="text-primary" size={32} />,
            title: t('features.f5_title'),
            desc: t('features.f5_desc')
        },
        {
            icon: <Smartphone className="text-secondary" size={32} />,
            title: t('features.f6_title'),
            desc: t('features.f6_desc')
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('features.title')} <span className="text-gradient">{t('features.title_accent')}</span></h2>
                    <p className="section-subtitle">{t('features.subtitle')}</p>
                </div>

                <div className="features-grid">
                    {features.map((feat, index) => (
                        <div className="feature-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="feature-icon">{feat.icon}</div>
                            <h3 className="feature-title">{feat.title}</h3>
                            <p className="feature-desc">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;