import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-card animate-fade-in">
                    <div className="contact-header">
                        <h2 className="section-title">¿Listo para tomar el <span className="text-gradient">Control</span>?</h2>
                        <p className="contact-subtitle">
                            La forma más rápida y directa de contactarnos es a través de WhatsApp. 
                            Estamos listos para resolver todas tus dudas sobre el GMC-001.
                        </p>
                    </div>
                    
                    <div className="contact-main">
                        <a href="https://wa.me/56988170598" target="_blank" rel="noopener noreferrer" className="whatsapp-cta-large">
                            <div className="whatsapp-icon-wrapper">
                                <MessageCircle size={48} />
                                <span className="status-dot"></span>
                            </div>
                            <div className="whatsapp-text">
                                <span className="whatsapp-label">Escríbenos ahora</span>
                                <span className="whatsapp-number">+56 9 8817 0598</span>
                            </div>
                            <div className="whatsapp-arrow">→</div>
                        </a>
                    </div>

                    <div className="contact-footer">
                        <p>Atención personalizada</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
