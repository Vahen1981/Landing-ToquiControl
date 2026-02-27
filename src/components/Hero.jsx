import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <div className="badge">Nuevo Producto</div>
                    <h1 className="hero-title">
                        Domina tus efectos con el <br />
                        <span className="text-gradient">GMC-001</span>
                    </h1>
                    <p className="hero-subtitle">
                        El controlador MIDI definitivo para guitarristas. Diseñado en Chile, construido para el escenario. Control total al alcance de tus pies.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Reservar Ahora</a>
                        <a href="#features" className="btn btn-secondary">Explorar Funciones</a>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* We will replace this image src with the generated image artifact later */}
                    <div className="hero-image-placeholder">
                        <img src="/gmc-001.png" alt="GMC-001 MIDI Controller" className="hero-image" />
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
