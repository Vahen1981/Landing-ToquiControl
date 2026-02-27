import React from 'react';

const AppSection = () => {
    return (
        <section id="app" className="app-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        <span className="text-gradient">Toqui</span>App
                    </h2>
                    <p className="section-subtitle">Programa tu controlador (Próximamente...)</p>
                </div>

                <div className="app-placeholder-container">
                    {/* El código de la app se insertará aquí. Este es el espacio en blanco requerido por el usuario. */}
                    <div className="app-canvas-blank"></div>
                </div>
            </div>
        </section>
    );
};

export default AppSection;
