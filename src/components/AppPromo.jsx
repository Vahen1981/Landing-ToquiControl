import React from 'react';
import { ExternalLink, Cpu } from 'lucide-react';

const AppPromo = ({ onOpenApp }) => {
    return (
        <section id="app-promo" className="app-promo-section">
            <div className="container">
                <div className="app-promo-card animate-fade-in">
                    <div className="app-promo-content">
                        <div className="promo-badge">
                            <Cpu size={16} />
                            <span>Software Exclusivo</span>
                        </div>
                        <h2 className="section-title">Programa tu Toqui sobre la <span className="text-gradient">Marcha</span></h2>
                        <p className="promo-text">
                            No necesitas instalar nada. Accede a nuestra aplicación web integrada para 
                            configurar cada detalle de tu GMC-001 de forma visual e intuitiva. 
                            Personaliza comandos, canales y presets en segundos.
                        </p>
                        <div className="promo-features">
                            <div className="promo-feature">
                                <span className="feature-dot"></span>
                                <span>Interfaz Visual</span>
                            </div>
                            <div className="promo-feature">
                                <span className="feature-dot"></span>
                                <span>Sincronización Real</span>
                            </div>
                            <div className="promo-feature">
                                <span className="feature-dot"></span>
                                <span>Cero Instalación</span>
                            </div>
                        </div>
                        <button onClick={onOpenApp} className="btn btn-primary btn-large">
                            Abrir Aplicación de Programación <ExternalLink size={20} style={{ marginLeft: '10px' }} />
                        </button>
                    </div>
                    <div className="app-promo-image" onClick={onOpenApp}>
                        <div className="image-browser-mockup">
                            <div className="browser-header">
                                <div className="browser-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="browser-bar">toquicontrol.cl/app</div>
                            </div>
                            <img src="/app-capture.png" alt="ToquiControl Web App Interface" />
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
