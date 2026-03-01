import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">
                        Precisión bajo tus pies con el <br />
                        <span className="text-gradient">GMC-001</span>
                    </h1>
                    <p className="hero-subtitle">
                        Un controlador MIDI profesional diseñado para músicos que exigen estabilidad real en vivo. 
                        Programación rápida desde cualquier navegador, sin drivers ni software adicional. 
                        Construcción sólida en madera y switches latching de alto desempeño para un control confiable, noche tras noche.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Contactar</a>
                        <a href="#features" className="btn btn-secondary">Explorar Funciones</a>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* We will replace this image src with the generated image artifact later */}
                    <div className="hero-image-placeholder">
                        <img src="/gmc-wood.png" alt="GMC-001 MIDI Controller Wood Edition" className="hero-image" />
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
